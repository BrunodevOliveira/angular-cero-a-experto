import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: 'herois',
    loadChildren: () =>
      import('./herois/herois.module').then((m) => m.HeroisModule),
    canLoad: [AuthGuard], //especificamos dentro do array quantos Guards teremos protegendo essa rota
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
