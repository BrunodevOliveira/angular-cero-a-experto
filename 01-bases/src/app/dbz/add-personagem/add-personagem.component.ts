import { DbzService } from './../services/dbz.services';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipersonagem } from '../interfaces/dbz.interface';

@Component({
  selector: 'add-personagem',
  templateUrl: './add-personagem.component.html',
  styleUrls: ['./add-personagem.component.css'],
})
export class AddPersonagemComponent implements OnInit {
  @Input() novoPersonagem: Ipersonagem = {
    nome: '',
    poder: 0,
  };

  /**
   * ! Cria um método responsável por emitir eventos, tipamos o dado que irá ser enviado
   */
  // @Output() onNovoPersonagem: EventEmitter<Ipersonagem> = new EventEmitter();

  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {
    // console.log(this.personagens);
  }

  adicionarPersonagem() {
    if (this.novoPersonagem.nome.trim().length === 0) return;
    console.log(this.novoPersonagem);

    //~ com o método emit, enviamos o dado ao componente pai
    // this.onNovoPersonagem.emit(this.novoPersonagem);

    this.dbzService.adicionarPersonagem(this.novoPersonagem);

    this.novoPersonagem = {
      nome: '',
      poder: 0,
    };
  }
}
