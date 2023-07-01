import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'modal-personalizado',
  templateUrl: './modal-personalizado.component.html',
  styleUrls: ['./modal-personalizado.component.css']
})
export class ModalPersonalizadoComponent implements OnInit {
  public mostrar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle () {
    this.mostrar = !this.mostrar;
  }

}
