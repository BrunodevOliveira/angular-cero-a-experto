import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  termo: string = '';
  erroNaRequisicao: boolean = false;
  capital: Array<Country> = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termo: string) {
    this.erroNaRequisicao = false;
    this.termo = termo;

    this.paisService.buscarCapital(termo).subscribe({
      next: (capital) => {
        this.capital = capital;
      },
      error: (err) => {
        console.log('Error');
        console.info(err);
        this.erroNaRequisicao = true;
        this.capital = [];
      },
    });
  }
}
