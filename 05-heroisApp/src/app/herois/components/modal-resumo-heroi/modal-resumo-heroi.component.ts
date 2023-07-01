import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modal-resumo-heroi',
  templateUrl: './modal-resumo-heroi.component.html',
  styleUrls: ['./modal-resumo-heroi.component.scss']
})
export class ModalResumoHeroiComponent implements OnInit {
  @Output() envioForm = new EventEmitter<boolean>
  constructor() { }

  ngOnInit() {
  }

  enviarForm(){
    this.envioForm.emit(true)
  }

}
