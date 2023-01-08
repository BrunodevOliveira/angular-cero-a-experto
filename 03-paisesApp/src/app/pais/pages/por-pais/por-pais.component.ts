import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent implements OnInit {
  termo: string = '';
  erroNaRequisicao: boolean = false;
  paises: Array<Country> = [];
  paisesSugeridos: Country[] = [];
  mostrarSugestoes: boolean = false;

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(pais: string) {
    this.erroNaRequisicao = false;
    this.mostrarSugestoes = false;
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
    this.mostrarSugestoes = true;
    this.termo = termo;

    this.paisService.buscarPais(termo).subscribe({
      next: (paises) => (this.paisesSugeridos = paises.splice(0, 5)),
      error: (err) => (this.paisesSugeridos = []),
    });
  }

  buscarSugestao(termo: string) {
    this.buscar(termo);
  }
}
