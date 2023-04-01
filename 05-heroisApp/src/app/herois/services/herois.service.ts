import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Herois } from '../interfaces/herois.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HeroisService {
  private url: string = 'http://localhost:3000/heroes';
  constructor(private http: HttpClient) {}

  getHerois(): Observable<Herois[]> {
    return this.http.get<Herois[]>(this.url);
  }

  getHeroi(id: string): Observable<Herois> {
    return this.http.get<Herois>(`${this.url}/${id}`);
  }

  getSugestoes(termoDeBusca: string): Observable<Herois[]> {
    const busca = `?q=${termoDeBusca}&_limit=6`;
    return this.http.get<Herois[]>(this.url + busca);
  }

  adicionarHeroi(heroi: Herois): Observable<Herois> {
    return this.http.post<Herois>(`${this.url}`, heroi);
  }

  atualizarHeroi(heroi: Herois): Observable<Herois> {
    return this.http.put<Herois>(`${this.url}/${heroi.id}`, heroi);
  }

  apagarHeroi(id: string): Observable<{}> {
    return this.http.delete<{}>(`${this.url}/${id}`);
  }
}
