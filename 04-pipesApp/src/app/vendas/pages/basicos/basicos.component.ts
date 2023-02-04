import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nomeLower: string = 'bruno';
  nomeUpper: string = 'BRUNO';
  nomeCompleto: string = 'BRuNo oLiVeira';

  data: Date = new Date(); //dia de hoje
}
