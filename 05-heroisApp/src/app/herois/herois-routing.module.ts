import { ErrorPageComponent } from './../shared/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroiComponent } from './pages/heroi/heroi.component';
import { AdicionarComponent } from './pages/adicionar/adicionar.component';
import { ListaComponent } from './pages/lista/lista.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listar',
        component: ListaComponent,
      },
      {
        path: 'adicionar',
        component: AdicionarComponent,
      },
      {
        path: 'editar/:id',
        component: AdicionarComponent,
      },
      {
        path: 'busca',
        component: BuscarComponent,
      },
      {
        path: ':id',
        component: HeroiComponent,
      },
      {
        path: '**',
        component: ErrorPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroisRoutingModule {}
