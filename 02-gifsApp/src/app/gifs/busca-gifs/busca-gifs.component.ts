import { GifsServices } from '../services/gifs-services.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'busca-gifs',
  templateUrl: './busca-gifs.component.html',
  styles: [],
})
export class BuscaGifsComponent implements OnInit {
  @ViewChild('txtBuscado') txtBuscado!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsServices) {}

  ngOnInit(): void {}

  buscar() {
    const valor = this.txtBuscado.nativeElement.value;
    if (valor.trim().length === 0) return;
    this.gifsService.buscarGifs(valor);
    this.txtBuscado.nativeElement.value = '';
  }
}
