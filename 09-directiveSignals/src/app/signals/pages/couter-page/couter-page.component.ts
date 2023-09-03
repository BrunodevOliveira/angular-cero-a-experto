import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './couter-page.component.html',
  styleUrls: ['./couter-page.component.css']
})
export class CounterPageComponent {

  public counter = signal(10)

  //^função que depende de um ou mais Signals e retorna um novo valor baseado neles. O valor retornado é readonly.
  public squareCounter = computed(() => this.counter() * this.counter())

  increaseBy(value: number) {
    // this.counter.set(this.counter() + value) //^Quando não precisamo ter acesso ao valor anterior, podemos utilizar o set
    this.counter.update(current => current + value) //^Método mais recomendado para atualizar o valor de um signal


  }

  /*
    - .set() => Estabelece um novo valor a todos os campos do signal
    - .update() => substitui o objeto inteiro;
    - .mutate() => apenas o atualiza sem substituir o objeto inteiro.
  */

}
