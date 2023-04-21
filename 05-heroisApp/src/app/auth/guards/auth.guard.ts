import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  private authService = inject(AuthService);
  private router = inject(Router);

  //* Previne que o usuário carregue o módulo que o 'canLoad' esteja protegendo.
  //! Suponha que vc logue e seja redirecionado a tela de listar herói e em seguiga deslogue. Como o módulo "Herois" já foi carregado uma vez, vc mesmo sem logar irá conseguir ter acesso a ele.
  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | boolean {
    // return !!this.authService.auth.id;
    return this.authService.verificarAutenticacao().pipe(
      tap((estaAutenticado) => {
        if (!estaAutenticado) this.router.navigate(['/auth/login']);
      })
    );
  }

  //^Para previnir que o usuário acesse a rota sem autorização devido ao módulo já estar carrecado utilizamos o canActivate
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // return !!this.authService.auth.id;
    return this.authService.verificarAutenticacao().pipe(
      tap((estaAutenticado) => {
        if (!estaAutenticado) this.router.navigate(['/auth/login']);
      })
    );
  }
}
