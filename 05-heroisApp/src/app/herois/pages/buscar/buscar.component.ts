import { HeroisService } from './../../services/herois.service';
import { Herois } from './../../interfaces/herois.interfaces';
import { Component, inject } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent {
  public termoDeBusca: string = '';
  public herois: Herois[] = [];
  public heroiSelecionado!: Herois;

  private heroisService = inject(HeroisService);

  buscarHeroi() {
    this.heroisService
      .getSugestoes(this.termoDeBusca.trim())
      .subscribe((herois) => (this.herois = herois));
  }

  opcaoSelecionada(event: MatAutocompleteSelectedEvent) {
    //Event-> recebe o valor selecionado da tag mat-option
    //^ Caso o termo digitado n exista, será exibido a msg de 'heroi não encontrado' e se mesmo assim o usuário clicar nessa msg previnimos a execução da requisição
    if (!event.option.value) return;

    const heroi: Herois = event.option.value;
    this.termoDeBusca = heroi.superhero;

    this.heroisService
      .getHeroi(heroi.id!) //! garanto ao TS que "id" nunca é undefined
      .subscribe((heroi) => (this.heroiSelecionado = heroi));
  }
}
