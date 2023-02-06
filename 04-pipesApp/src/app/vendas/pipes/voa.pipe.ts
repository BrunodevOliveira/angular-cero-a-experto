import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'voa',
})
export class VoaPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'voa' : 'não voa';
  }
}
