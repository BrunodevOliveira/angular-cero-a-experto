import { Herois } from './../interfaces/herois.interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(heroi: Herois) {
    const imgId = heroi.id;
    return `assets/heroes/${imgId}.jpg`;
  }
}
