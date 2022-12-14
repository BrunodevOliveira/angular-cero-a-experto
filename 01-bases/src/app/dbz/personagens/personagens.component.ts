import { DbzService } from './../services/dbz.services';
import { Component, OnInit, Input } from '@angular/core';
import { Ipersonagem } from '../interfaces/dbz.interface';

@Component({
  selector: 'personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css'],
})
export class PersonagensComponent implements OnInit {
  // @Input() personagens!: Array<Ipersonagem>;

  get personagens() {
    return this.dbzService.personagens;
  }

  //! Não funciona ->  personagens = this.dbzService.personagens;

  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}
}
