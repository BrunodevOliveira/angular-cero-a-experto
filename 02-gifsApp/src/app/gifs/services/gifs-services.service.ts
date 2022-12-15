import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', //Sinaliza que esse serviço é unico globalmente em toda a aplicação, não sendo necessário declarar nos módulos
})
export class GifsServices {
  private _historico: Array<string> = [];

  get historico() {
    return [...this._historico];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    if (this._historico.includes(query)) return;

    this._historico.unshift(query);
    this._historico = this._historico.slice(0, 10);
  }
}
