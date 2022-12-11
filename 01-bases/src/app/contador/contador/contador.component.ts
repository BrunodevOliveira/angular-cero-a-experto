import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  template: `
    <h1>{{ title }}</h1>
    <h3>
      A base é: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular(base)">+ {{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
  styles: [],
})
export class ContadorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title: string = 'Contador';
  numero: number = 10;
  base: number = 5;

  acumular = (valor: number): number => (this.numero += valor);
}
