import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPersonalizadoComponent } from './modal-personalizado/modal-personalizado.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModalPersonalizadoComponent],
  exports: [ModalPersonalizadoComponent]
})
export class SharedModule { }
