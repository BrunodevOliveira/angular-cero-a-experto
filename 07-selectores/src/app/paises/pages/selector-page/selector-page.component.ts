import { Pais } from './../../interfaces/paises.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { PaisSmall } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises-service.service';

@Component({
  selector: 'selector-page',
  templateUrl: './selector-page.component.html',
  styles: [],
})
export class SelectorPageComponent implements OnInit {
  public formulario: FormGroup = this.fb.group({
    regiao: ['', Validators.required],
    pais: ['', Validators.required],
    fronteira: ['', Validators.required],
  });

  regioes: string[] = [];
  paises: PaisSmall[] = [];
  fronteiras: string[] = [];
  exibirFronteiras = true;

  constructor(private fb: FormBuilder, private paiseServce: PaisesService) {}

  ngOnInit(): void {
    this.regioes = this.paiseServce.regioes;

    // Busca por regiao
    // this.formulario.get('regiao')?.valueChanges.subscribe((regiao) => {
    //   console.log(regiao);
    //   this.paiseServce.buscarPaisesPorRegiao(regiao).subscribe((paises) => {
    //     console.log(paises);

    //     this.paises = paises;
    //   });
    // });

    this.formulario
      .get('regiao')
      ?.valueChanges.pipe(
        // Dispara um efeito secundário
        tap((_) => {
          this.formulario.get('pais')?.reset('');
        }),
        // Tenho o valor do observable retornado do select de regiao, com ele posso fazer a troca (switch) pelo observable que retorna os países
        switchMap((regiao) => this.paiseServce.buscarPaisesPorRegiao(regiao))
      )
      .subscribe((paises) => {
        this.paises = paises;
      });

    // Ao selecionar o Pais envio o alphCode que vem do HTML para uma nova petição
    this.formulario
      .get('pais')
      ?.valueChanges.pipe(
        tap((_) => {
          this.fronteiras = [];
          this.formulario.get('fronteira')?.reset('');
        }),
        switchMap((cod) => this.paiseServce.buscarPaisPorCodigo(cod))
      )
      .subscribe((pais) => {
        this.fronteiras = pais?.borders || [];
      });
  }

  guardar() {
    console.log(this.formulario.value);
  }
}
