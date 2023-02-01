import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Pais, PaisSmall } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private baseUrl: string = 'https://restcountries.com/v2';

  private _regioes: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  get regioes(): string[] {
    return [...this._regioes]; //Dessa forma evito que passe o array por referência
  }

  constructor(private http: HttpClient) {}

  buscarPaisesPorRegiao(regiao: string): Observable<PaisSmall[]> {
    const url: string = `${this.baseUrl}/region/${regiao}?fields=alpha3Code,name`;
    return this.http.get<PaisSmall[]>(url);
  }

  buscarPaisPorCodigo(codigo: string): Observable<Pais | null> {
    if (!codigo) {
      return of(null);
    }
    const url: string = `${this.baseUrl}/alpha/${codigo}`;
    return this.http.get<Pais>(url);
  }

  buscarPaisPorCodigoSmall(codigo: string): Observable<PaisSmall> {
    const url: string = `${this.baseUrl}/alpha/${codigo}?fields=alpha3Code,name`;
    return this.http.get<PaisSmall>(url);
  }

  buscarPaisesPorFronteiras(fronteiras: string[]): Observable<PaisSmall[]> {
    if (!fronteiras) return of([]);

    const requisicoes: Observable<PaisSmall>[] = [];

    fronteiras.forEach((codigo) => {
      const requisicao = this.buscarPaisPorCodigoSmall(codigo);
      requisicoes.push(requisicao);
    });

    return combineLatest(requisicoes);
  }
}
