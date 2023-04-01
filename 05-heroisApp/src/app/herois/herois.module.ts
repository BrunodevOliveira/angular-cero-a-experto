import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdicionarComponent } from './pages/adicionar/adicionar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroiComponent } from './pages/heroi/heroi.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaComponent } from './pages/lista/lista.component';
import { HeroisRoutingModule } from './herois-routing.module';
import { MaterialModule } from '../material/material.module';
import { HeroiCartaoComponent } from './components/heroi-cartao/heroi-cartao.component';
import { ImagePipe } from './pipes/image.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';

@NgModule({
  declarations: [
    AdicionarComponent,
    BuscarComponent,
    HeroiComponent,
    HomeComponent,
    ListaComponent,
    HeroiCartaoComponent,
    ImagePipe,
    ConfirmarComponent,
  ],
  imports: [
    CommonModule,
    HeroisRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
  ],
})
export class HeroisModule {}
