import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css'],
})
export class PropertiesPageComponent {
  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  public execucoesEffect = 0

  public userChangedEffect = effect(() => { //*  função que é executa quando um ou mais Signals mudam.
    console.log("userChangedEffect executada: " + ++this.execucoesEffect);


    // ! ⚠️ Não é possível alterar o valor de um signal dentro do effect!!
    //! Dependências: toda vez que algum sinal utilizado no `effect` seja modificado, essa função será executada.
    this.user().first_name
  })

  public fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`)

  onFieldUpdate(field: keyof User, value: string) {

    const switchCampo: User = {
      email: value,
      first_name: value,
      last_name: value,
      id: +value,
      avatar: value
    }

    this.user.mutate(currentUser => {
      /*
        Dessa forma, você diz ao TypeScript que o tipo de currentUser é um objeto que tem
        as mesmas chaves que o tipo User, mas os valores podem ser uma string ou um número.
        Assim, você pode atribuir o valor de switchCampo[field] sem gerar um erro.
      */
      (currentUser as Record<keyof User, string | number>)[field] = switchCampo[field];

      // switch(field) {
      //   case 'email':
      //     currentUser.email = value
      //   break;
      //   case 'first_name':
      //     currentUser.first_name = value
      //   break;
      //   case 'last_name':
      //     currentUser.last_name = value
      //   break;
      //   case 'id':
      //     currentUser.id = +value
      //   break;
      // }
    })
  }

  /*
    - .set() => Estabelece um novo valor a todos os campos do signal
    - .update() => substitui o objeto inteiro;
    - .mutate() => apenas o atualiza sem substituir o objeto inteiro.
  */
}
