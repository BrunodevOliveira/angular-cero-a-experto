import { inject, Injectable } from '@angular/core';
import {
  Router,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class PublicGuard {
  private authService = inject(AuthService);
  private router = inject(Router);

  //! Esse Guard impede que um usuário autenticado Acesse a rota 'Auth'
  private verificarAuthStatus(): boolean | Observable<boolean> {
    return this.authService.verificarAutenticacao().pipe(
      tap((estaAutenticado) => {
        console.log('Está autenticado');
        if (estaAutenticado) this.router.navigate(['/herois/listar']);
      }),
      map((estaAutenticado) => !estaAutenticado)
    );
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | boolean {
    return this.verificarAuthStatus();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.verificarAuthStatus();
  }
}
