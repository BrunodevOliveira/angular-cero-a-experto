import { HeroisService } from './../../services/herois.service';
import { Component, OnInit } from '@angular/core';
import { Herois } from '../../interfaces/herois.interfaces';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: [
    `
      mat-card {
        margin-top: 1rem;
      }
    `,
  ],
})
export class ListaComponent implements OnInit {
  public herois: Herois[] = [];

  constructor(private heroisService: HeroisService) {}

  ngOnInit(): void {
    this.heroisService.getHerois().subscribe({
      next: (herois) => (this.herois = herois),
      error: (err) => console.log(err),
      complete: () => console.log('Requisição concluída!'),
    });
  }
}
