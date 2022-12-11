import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  herois: Array<string> = [
    'Homem Aranha',
    'Hulk',
    'Thor',
    'Dr Estranho',
    'Capitão América',
  ];
  heroiRemovido?: string;

  apagarHeroi() {
    this.heroiRemovido = this.herois.shift();
  }
}
