import { Herois } from './../interfaces/herois.interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image',
  pure: false, //Dessa forma faço o Pipe ser executado em todo o ciclo de vida do Angular
})
export class ImagePipe implements PipeTransform {
  transform(heroi: Herois) {
    const { id, alt_img } = heroi;

    if (!id && !alt_img) return 'assets/no-image.png';

    if (alt_img) return alt_img;

    return `assets/heroes/${id}.jpg`;
  }
}
