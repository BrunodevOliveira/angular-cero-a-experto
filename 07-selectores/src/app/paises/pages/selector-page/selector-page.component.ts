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
  // fronteiras: string[] = [];
  fronteiras: PaisSmall[] = [];
  carregando = false;

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
          // this.formulario.get('fronteira')?.disable(); Forma de desabilitar o campo fronteira assim que escolher um Continente
          this.carregando = true;
        }),
        // Tenho o valor do observable retornado do select de regiao, com ele posso fazer a troca (switch) pelo observable que retorna os países
        switchMap((regiao) => this.paiseServce.buscarPaisesPorRegiao(regiao))
      )
      .subscribe((paises) => {
        this.paises = paises;
        this.carregando = false;
      });

    // Ao selecionar o Pais envio o alphCode que vem do HTML para uma nova petição
    this.formulario
      .get('pais')
      ?.valueChanges.pipe(
        tap((_) => {
          this.fronteiras = [];
          this.formulario.get('fronteira')?.reset('');
          // this.formulario.get('fronteira')?.enable(); Habilito campo fronteira assim que escolher um país
          this.carregando = true;
        }),
        switchMap((cod) => this.paiseServce.buscarPaisPorCodigo(cod)),
        switchMap((pais) =>
          this.paiseServce.buscarPaisesPorFronteiras(pais?.borders!)
        ) //recebe o produto do switchMap anterior, utilizo '?' para dizer que isso pode ser null e '!' para dizer que sempre teremos dados e n será undefined
      )
      .subscribe((paises) => {
        // this.fronteiras = pais?.borders || [];
        this.fronteiras = paises;
        this.carregando = false;
      });
  }

  guardar() {
    console.log(this.formulario.value);
  }
}
