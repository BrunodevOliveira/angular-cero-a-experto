import { NgModule } from '@angular/core';

// Módulos
import { PrimeNgModule } from './../prime-ng/prime-ng.module';

// Componentes
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { IncomumComponent } from './pages/incomum/incomum.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

@NgModule({
  declarations: [
    NumerosComponent,
    IncomumComponent,
    BasicosComponent,
    OrdenarComponent,
  ],
  exports: [
    NumerosComponent,
    IncomumComponent,
    BasicosComponent,
    OrdenarComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
})
export class VendasModule {}
