import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdicionarComponent } from './pages/adicionar/adicionar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroiComponent } from './pages/heroi/heroi.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaComponent } from './pages/lista/lista.component';
import { HeroisRoutingModule } from './herois-routing.module';

@NgModule({
  declarations: [
    AdicionarComponent,
    BuscarComponent,
    HeroiComponent,
    HomeComponent,
    ListaComponent,
  ],
  imports: [CommonModule, HeroisRoutingModule],
})
export class HeroisModule {}
