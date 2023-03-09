import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'seletores-aninhados', component: SelectorPageComponent },
      { path: '**', redirectTo: 'seletores-aninhados' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisesRoutingModule {}
