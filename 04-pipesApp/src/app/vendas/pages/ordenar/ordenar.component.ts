import { Component } from '@angular/core';
import { Cor, Heroi } from '../../interfaces/vendas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  maiusculaOuMinuscula: boolean = true;

  ordenarPor: string = 'sem valor';

  herois: Heroi[] = [
    {
      nome: 'Superman',
      voa: true,
      color: Cor.azul,
    },
    {
      nome: 'Batman',
      voa: false,
      color: Cor.preto,
    },
    {
      nome: 'Robin',
      voa: false,
      color: Cor.verde,
    },
    {
      nome: 'Demolidor',
      voa: false,
      color: Cor.roxo,
    },
    {
      nome: 'Lanterna Verde',
      voa: true,
      color: Cor.verde,
    },
  ];

  celular = '552134537272';

  toggleMaiusculas() {
    return (this.maiusculaOuMinuscula = !this.maiusculaOuMinuscula);
  }

  trocarOrdem(valor: string) {
    this.ordenarPor = valor;
  }
}
