import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NgChartsModule } from 'ng2-charts';

import { GraficosRoutingModule } from './graficos-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';
import GraficoBarraComponent from './components/grafico-barra/grafico-barra.component';
import { GraficosService } from './services/graficos.service';

@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonutComponent,
    DonutHttpComponent,
    GraficoBarraComponent,
  ],
  imports: [
    CommonModule,
    GraficosRoutingModule,
    NgChartsModule,
    HttpClientModule,
  ],
  providers: [GraficosService],
})
export class GraficosModule {}