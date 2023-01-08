import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  //Será emitido quando a pessoa deixar de escrever
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  //Por ser um Observable consigo fazer uso de métodos do RXJS
  debouncer: Subject<string> = new Subject();

  termo: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((valor) => this.onDebounce.emit(valor));
  }
  teclaPressionada(event: any) {
    //const valor = event.target.value;
    this.debouncer.next(this.termo); //envio o valor digitado no input para o Observable subscrito no ngOnInit
  }

  buscar() {
    this.onEnter.emit(this.termo);
  }
}
