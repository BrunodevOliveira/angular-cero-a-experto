import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  termo: string = '';
  constructor() {}

  ngOnInit(): void {}

  buscar() {
    console.log(this.termo);
  }
}
