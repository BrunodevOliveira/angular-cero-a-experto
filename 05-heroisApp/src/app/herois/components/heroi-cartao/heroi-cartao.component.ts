import { Component, Input } from '@angular/core';
import { Herois } from '../../interfaces/herois.interfaces';

@Component({
  selector: 'heroi-cartao',
  templateUrl: './heroi-cartao.component.html',
  styles: [``],
})
export class HeroiCartaoComponent {
  @Input() heroi!: Herois;
}
