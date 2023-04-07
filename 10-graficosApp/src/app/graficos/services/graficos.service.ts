import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, delay } from 'rxjs';
import { Usuarios } from '../interfaces/Usuarios.interface';

@Injectable()
export class GraficosService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';

  getUsuarios(): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.baseUrl}/grafica`);
  }

  getUsuariosDonutData() {
    return this.getUsuarios().pipe(
      delay(1000),
      map((usuarios) => {
        const labels = Object.keys(usuarios);
        const values = Object.values(usuarios);
        return {
          labels,
          values,
        };
      })
    );
  }
}
