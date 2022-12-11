import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heroi',
  template: `
    <h1>{{ nome }}</h1>
    <dl>
      <td>Nome:</td>
      <dd>{{ nome }}</dd>

      <td>Idade:</td>
      <dd>{{ idade }}</dd>

      <td>Função:</td>
      <dd>{{ obterNome() }}</dd>

      <td>Capitalizado:</td>
      <dd>{{ nomeCapitalizado }}</dd>
    </dl>

    <button (click)="trocarNome()">Trocar herói</button>
    <button (click)="trocarIdade()">Trocar idade</button>
  `,
  styles: [],
})
export class HeroiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  nome: string = 'Homem de ferro';
  idade: number = 45;
  obterNome(): string {
    return `${this.nome} - ${this.idade}`;
  }

  // ^ Como estamos numa classe podemos criar um Getter (não é uma classe)
  get nomeCapitalizado() {
    return this.nome.toUpperCase();
  }

  trocarNome() {
    this.nome = 'Homem Aranha';
  }

  trocarIdade() {
    this.idade = 30;
  }
}
