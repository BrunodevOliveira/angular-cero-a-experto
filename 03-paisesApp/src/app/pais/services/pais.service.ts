import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  buscarPais(nome: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${nome}`;

    return this.http.get<Country[]>(url);
    /**
     *! Operadores RXJS são funções que serão executadas com base na resposta a requisição
        .pipe(
          catchError((err) => of([])) //^ of -> função que transforma qualquer coisa em um observable, nesse caso estamos transformando um Array.
        )
     */
  }
}
