import { NgModule } from '@angular/core';

// Módulos
import { PrimeNgModule } from './../prime-ng/prime-ng.module';

// Componentes
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { IncomumComponent } from './pages/incomum/incomum.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';

// Pipes personalizados
import { MaiusculasPipe } from './pipes/maiusculas.pipe';
import { VoaPipe } from './pipes/voa.pipe';
import { OrdenarNomePipe } from './pipes/ordenar-nome.pipe';
import { FormsModule } from '@angular/forms';
import { PhonePipe } from './pipes/phone.pipe';

@NgModule({
  declarations: [
    NumerosComponent,
    IncomumComponent,
    BasicosComponent,
    OrdenarComponent,
    MaiusculasPipe,
    VoaPipe,
    OrdenarNomePipe,
    PhonePipe,
  ],
  exports: [
    NumerosComponent,
    IncomumComponent,
    BasicosComponent,
    OrdenarComponent,
  ],
  imports: [CommonModule, PrimeNgModule, FormsModule],
})
export class VendasModule {}
