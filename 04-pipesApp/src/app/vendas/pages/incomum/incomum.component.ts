import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-incomum',
  templateUrl: './incomum.component.html',
  styles: [],
})
export class IncomumComponent {
  // i18nSelect
  nome: string = 'Bruno';
  genero: string = 'masculino';
  trocaGeneroPalavra = {
    masculino: 'convida-lo',
    feminino: 'convida-la',
  };

  // i18nPlural
  clientes: string[] = ['Bruno', 'Barbara', 'Gabi', 'Arrascaeta'];
  clientesMapa = {
    '=0': 'não temos nenhum cliente esperando',
    '=1': 'temos 1 cliente esperando',
    '=2': 'temos 2 clientes esperando',
    other: 'temos # clientes esperando',
  };

  trocarCliente() {
    this.nome = 'Barbara';
    this.genero = 'feminino';
  }

  excluirCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  pessoa = {
    nome: 'Bruno',
    idage: 30,
    localidade: 'Toronto, Canada',
  };

  // JsonPipe
  herois = [
    {
      nome: 'Superman',
      value: true,
    },
    {
      nome: 'Robin',
      value: false,
    },
    {
      nome: 'Aquaman',
      value: false,
    },
  ];

  // Async Pipe
  //! Observable que irá emitir valores numéricos em ordem crescente de 1 em 1 segundo
  meuObservable = interval(1000).pipe(tap(() => console.log('intervalo')));
}
