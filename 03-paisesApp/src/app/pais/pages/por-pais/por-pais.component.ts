import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  termo: string = '';
  erroNaRequisicao: boolean = false;
  paises: Array<Country> = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(pais: string) {
    this.erroNaRequisicao = false;
    this.termo = pais;

    this.paisService.buscarPais(pais).subscribe({
      next: (paises) => {
        // console.log(paises);
        this.paises = paises;
      },
      error: (err) => {
        console.log('Error');
        console.info(err);
        this.erroNaRequisicao = true;
        this.paises = [];
      },
    });
  }

  sugestoes(termo: any) {
    this.erroNaRequisicao = false;
    // TODO: criar sugestões
    console.log('sugestões: ', termo);
  }
}
