import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maiusculas', //nome que iremos utilizar ao aplicar o Pipe
})
export class MaiusculasPipe implements PipeTransform {
  /**
   * Precisamos implementar essa interface para ter acesso ao método
   * transform que irá retornar o valor que o Pipe modifica
   */

  transform(valor: string, paraMaiusculas: boolean = true): string {
    return paraMaiusculas ? valor.toUpperCase() : valor.toLowerCase();
  }
}
