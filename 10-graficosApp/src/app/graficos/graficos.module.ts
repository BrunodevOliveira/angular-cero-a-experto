import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficosRoutingModule } from './graficos-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import { GraficoBarraComponent } from './components/grafico-barra/grafico-barra.component';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonutComponent,
    DonutHttpComponent,
    GraficoBarraComponent
  ],
  imports: [
    CommonModule,
    GraficosRoutingModule
  ]
})
export class GraficosModule { }
