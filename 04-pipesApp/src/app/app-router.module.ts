import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdenarComponent } from './vendas/pages/ordenar/ordenar.component';
import { IncomumComponent } from './vendas/pages/incomum/incomum.component';
import { NumerosComponent } from './vendas/pages/numeros/numeros.component';
import { BasicosComponent } from './vendas/pages/basicos/basicos.component';

const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full', // só exibe esse componente quando o path estiver vazio
  },
  {
    path: 'numeros',
    component: NumerosComponent,
  },
  {
    path: 'incomuns',
    component: IncomumComponent,
  },
  {
    path: 'ordenar',
    component: OrdenarComponent,
  },
  {
    path: '**',
    redirectTo: '', //Redirecionapara o path vazio, ou seja, BasicosComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
