import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'seletor',
    loadChildren: () =>
      import('./paises/paises.module').then((m) => m.PaisesModule),
  },
  {
    path: '**',
    redirectTo: 'seletor',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
