import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'pais-tabela',
  templateUrl: './pais-tabela.component.html',
  styles: [],
})
export class PaisTabelaComponent implements OnInit {
  @Input() paises: Array<Country> = [];

  constructor() {}

  ngOnInit(): void {}
}
