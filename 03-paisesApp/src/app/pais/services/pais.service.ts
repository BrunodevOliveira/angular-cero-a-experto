import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flag,population');
  }

  constructor(private http: HttpClient) {}

  buscarPais(nome: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${nome}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
    /**
     *! Operadores RXJS são funções que serão executadas com base na resposta a requisição
        .pipe(
          catchError((err) => of([])) //^ of -> função que transforma qualquer coisa em um observable, nesse caso estamos transformando um Array.
        )
     */
  }

  buscarCapital(nome: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${nome}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }

  buscarPaisPorRegiao(bloco: string): Observable<Country[]> {
    const url = `${this.apiUrl}/regionalbloc/${bloco}`;

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
}
