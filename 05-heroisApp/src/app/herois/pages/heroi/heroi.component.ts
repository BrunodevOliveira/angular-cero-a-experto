import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Herois } from '../../interfaces/herois.interfaces';
import { HeroisService } from '../../services/herois.service';

@Component({
  selector: 'app-heroi',
  templateUrl: './heroi.component.html',
  styles: [],
})
export class HeroiComponent implements OnInit {
  public heroi!: Herois;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroisService: HeroisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroisService.getHeroi(id)),
        delay(2000)
      )
      .subscribe((heroi) => (this.heroi = heroi));
  }
}
