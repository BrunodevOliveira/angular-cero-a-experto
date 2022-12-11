import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroiComponent } from './heroi/heroi.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    //Componentes que pertencem ao módulo e não estão acessíveis fora dele
    HeroiComponent,
    ListaComponent,
  ],
  exports: [ListaComponent, HeroiComponent],
  imports: [
    // Aqui coloco todos os módulos que serão utilizados em HeroesModule
    CommonModule, // módulo que fornece as diretivas do Angular
  ],
})
export class HeroesModule {}
