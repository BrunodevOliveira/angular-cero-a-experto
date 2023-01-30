import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'seletor', component: SelectorPageComponent },
      { path: '**', redirectTo: 'seletor' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisesRoutingModule {}
