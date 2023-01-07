import { Component, EventEmitter, Output, OnInit } from '@angular/core';
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

  //Por ser um Observable consigo fazer uso de métodos do RXJS
  debouncer: Subject<string> = new Subject();

  termo: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(
        //pipe -> permite tratar os dados antes de entrega-los

        //! Método que recebe os milissegundos que quero esperar antes de emitir o segundo valor(nesse caso a próxima letra)
        debounceTime(300) //* Com isso estamos dizendo para que não emita um subscribe antes que o Observable 'debouncer' fique 300ms sem receber valor
      )
      .subscribe((valor) => this.onDebounce.emit(valor));
  }
  teclaPressionada(event: any) {
    //! usaria o evento se não estivesse utilizando no ngModel para capturar o valor
    //const valor = event.target.value;
    this.debouncer.next(this.termo); //envio o valor digitado no input para o Observable
  }

  buscar() {
    this.onEnter.emit(this.termo);
  }
}
