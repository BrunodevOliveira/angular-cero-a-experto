import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Herois } from '../../interfaces/herois.interfaces';
import { HeroisService } from '../../services/herois.service';

@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class HeroiComponent implements OnInit {
  public heroi!: Herois;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroisService: HeroisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroisService.getHeroi(id)),
        delay(2000)
      )
      .subscribe((heroi) => (this.heroi = heroi));
  }

  voltar() {
    this.router.navigate(['/herois/listar']);
  }
  enviar() {
    console.log('Enviou o fomrulário')
  }
}
