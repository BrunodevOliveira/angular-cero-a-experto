import { Ipersonagem } from './../interfaces/dbz.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class DbzService {
  private _personagens: Array<Ipersonagem> = [
    {
      nome: 'Goku',
      poder: 15000,
    },
    {
      nome: 'Vegeta',
      poder: 7500,
    },
  ];

  get personagens(): Array<Ipersonagem> {
    //! Como em JS objetos são do tipo referência, faço um spread para que seja criado um novo array ao retornar ps dados
    return [...this._personagens];
  }

  //^ Posso injetar outros serviços
  constructor() {
    console.log('Serviço DbzService inicializado');
  }

  /**
   * ! Não utilizei [set] por opção do professor
   * ^ lembrando que get e set não são métodos (apesar de serem escritos como um) para serem chamados com ".adicionarPersonagem()".
   * * Eles são uma especie de "atributo" então a forma correta de utilizar em outros locais seria "adicionarPersonagem = personagem"
   */
  adicionarPersonagem(novoPersonagem: Ipersonagem) {
    this._personagens.push(novoPersonagem);
  }
}
