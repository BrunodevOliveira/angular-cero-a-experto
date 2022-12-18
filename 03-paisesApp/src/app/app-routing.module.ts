import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorRegiaoComponent } from './pais/pages/por-regiao/por-regiao.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

// Defino minhas rotas:
const routes: Routes = [
  {
    path: '', //rota base
    component: PorPaisComponent, //Componente que sera exibido na rota
    pathMatch: 'full',
  },
  {
    path: 'regiao',
    component: PorRegiaoComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  {
    //!redireciona o usuário para a página que quero caso ele acesse algum path desconhecido
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    //^ Módulo que fará as configurações das rotas que criei na constante routes
    RouterModule.forRoot(routes),
  ],
  exports: [
    //! Exportamos para ter acesso as funcionalidades do RouterModule como router-outlet.
    RouterModule,
  ],
})
export class AppRoutingModule {}
