import { Component } from '@angular/core';

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

  mostrarNome() {
    console.log(this.nome);
    console.log(this.valor);
    console.log(this.obj);
  }
}
