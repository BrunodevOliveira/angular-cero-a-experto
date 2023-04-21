import { catchError, map, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private url: string = 'http://localhost:3000/usuarios';
  private _auth: Auth | undefined;

  get auth() {
    return { ...this._auth }; //Desestruturo para não ter risco de modificar a prop _auth
  }

  login(): Observable<Auth> {
    return this.http.get<Auth>(`${this.url}/1`).pipe(
      tap((user) => (this._auth = user)),
      tap((user) => sessionStorage.setItem('token', user.id))
    );
  }

  logout() {
    this._auth = undefined;
  }

  verificarAutenticacao(): Observable<boolean> {
    if (!sessionStorage.getItem('token')) return of(false);

    return this.http.get<Auth>(`${this.url}/1`).pipe(
      tap((user) => (this._auth = user)),
      map((user) => (user.id ? true : false)),
      catchError((_) => of(false))
    );
    //  Map -> Transforma o valor que é retornado do observabel
    //salvo os dados em "this._auth" para que, ao recarregar a página, possamos reatribuir o valor perdido em memória dessa propriedade. Como esse método é chamado no canActivate e canLoad sempre teremos os dados do usuário logado disponíveis
  }
}
