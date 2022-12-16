import { Component, OnInit } from '@angular/core';
import { GifsServices } from '../services/gifs-services.service';

@Component({
  selector: 'resultados-gifs',
  templateUrl: './resultados-gifs.component.html',
  styles: [],
})
export class ResultadosGifsComponent implements OnInit {
  get resultados() {
    return this.gifsServices.resultadoDaBusca;
  }

  constructor(private gifsServices: GifsServices) {}

  ngOnInit(): void {}
}
