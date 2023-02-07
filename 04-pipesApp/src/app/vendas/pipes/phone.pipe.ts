import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(phone: string): string {
    let phoneFormatado = '';

    if (phone) {
      const value = phone.toString().replace(/\D/g, '');

      if (value.length > 12) {
        phoneFormatado = value.replace(
          /(\d{2})?(\d{2})?(\d{5})?(\d{4})/,
          '+$1 ($2) $3-$4'
        );
      } else if (value.length > 11) {
        phoneFormatado = value.replace(
          /(\d{2})?(\d{2})?(\d{4})?(\d{4})/,
          '+$1 ($2) $3-$4'
        );
      } else if (value.length > 10) {
        phoneFormatado = value.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');
      } else if (value.length > 9) {
        phoneFormatado = value.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');
      } else if (value.length > 5) {
        phoneFormatado = value.replace(
          /^(\d{2})?(\d{4})?(\d{0,4})/,
          '($1) $2-$3'
        );
      } else if (value.length > 1) {
        phoneFormatado = value.replace(/^(\d{2})?(\d{0,5})/, '($1) $2');
      } else {
        if (phone !== '') {
          phoneFormatado = value.replace(/^(\d*)/, '($1');
        }
      }
      return phoneFormatado;
    }
    return phoneFormatado;
  }
}
