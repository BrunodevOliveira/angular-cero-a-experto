import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nome: string = 'bRunO oLiVeiRa';
  valor: number = 1000;
  obj = {
    nome: 'Barbara',
  };

  //! Serve para ter acesso as configurações globais de PrimeNG
  constructor(private primeNGConfig: PrimeNGConfig) {
    this.primeNGConfig.ripple = true;
  }

  mostrarNome() {
    console.log(this.nome);
    console.log(this.valor);
    console.log(this.obj);
  }
}
