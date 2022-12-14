import { Component, OnInit } from '@angular/core';
import { Ipersonagem } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  //! O objetivo de MAin-page é distribuir os dados aos seus elementos filhos

  novoPersonagem: Ipersonagem = {
    nome: 'Tao Pai Pai',
    poder: 1800,
  };

  /** Acesso as propriedades do serviço através de Getters
    get personagens(): Array<Ipersonagem> {
      return this.dbzService.personagens;
    }
  */

  constructor() {}

  ngOnInit(): void {}

  //^ Essa é a forma "convencional de fazer um envio de formulário"
  enviarFormVanilla(event: SubmitEvent) {
    event.preventDefault();
    console.log(event);
  }

  //! o FormsModule é a maneira do Angular envia fomrulários de forma personalizada
  enviarForm() {
    // console.log(this.novoPersonagem);
  }

  //^Forma vanilla de capturar os dados do template para p componente.
  trocarNome(event: any) {
    console.log(event.target.value);
  }
}
