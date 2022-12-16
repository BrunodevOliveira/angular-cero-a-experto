import { GifsServices } from '../services/gifs-services.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'busca-gifs',
  templateUrl: './busca-gifs.component.html',
  styles: [],
})
export class BuscaGifsComponent implements OnInit {
  @ViewChild('txtBuscado') txtBuscado!: ElementRef<HTMLInputElement>;
  @ViewChild('titulo') titulo!: ElementRef<HTMLElement>;

  constructor(private gifsService: GifsServices) {}

  ngOnInit(): void {}

  pegarTitulo() {
    const conteudo = this.titulo.nativeElement;
    console.log('titulo anterior: ', conteudo.innerText);
    conteudo.innerHTML = `<h1 style="color: red">Buscandooo🥱</h1>`;
  }

  buscar() {
    const valor = this.txtBuscado.nativeElement.value;
    if (valor.trim().length === 0) return;
    this.gifsService.buscarGifs(valor);
    this.txtBuscado.nativeElement.value = '';
  }
}
