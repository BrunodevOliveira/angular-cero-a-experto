import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root', //Sinaliza que esse serviço é unico globalmente em toda a aplicação, não sendo necessário declarar nos módulos
})
export class GifsServices {
  private _apiKey: string = 'S17g3Wtj6RDJXNSLZshCkBxMEn7Qyigv';
  private _baseUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historico: Array<string> = [];

  public resultadoDaBusca!: Array<Gif>;

  get historico() {
    return [...this._historico];
  }

  constructor(private http: HttpClient) {
    // O constructor de um serviço é executado apenas uma vez pois ele segue os padrões Singleton
    this._historico = JSON.parse(localStorage.getItem('historicoDeBusca')!) || [];
    this.resultadoDaBusca = JSON.parse(localStorage.getItem('ultimaBusca')!) || [];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase(); //Formata a query

    if (!this._historico.includes(query)) {
      this._historico.unshift(query); //add como primeiro item no array
      this._historico = this._historico.slice(0, 10); //salva apenas as 10 últmas buscas

      localStorage.setItem('historicoDeBusca', JSON.stringify(this._historico)); //Locas Storage só aceita strings, por isso uso stringify para converter o objeto.
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this._baseUrl}/search`, { params })
      .subscribe((resp) => {
        this.resultadoDaBusca = resp.data;
        localStorage.setItem('ultimaBusca', JSON.stringify(this.resultadoDaBusca));
      });
  }
}
