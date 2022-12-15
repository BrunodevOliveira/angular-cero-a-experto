import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BuscaGifsComponent } from './busca-gifs/busca-gifs.component';
import { ResultadosGifsComponent } from './resultados-gifs/resultados-gifs.component';

@NgModule({
  declarations: [GifsPageComponent, BuscaGifsComponent, ResultadosGifsComponent],
  imports: [CommonModule],
  exports: [GifsPageComponent],
})
export class GifsModule {}
