import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './pages/switches-page/switches-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentePersonalizadoComponent } from './pages/componente-personalizado/componente-personalizado.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BasicPageComponent,
    DynamicPageComponent,
    SwitchesPageComponent,
    ComponentePersonalizadoComponent
  ],
  imports: [CommonModule, ReactiveRoutingModule, ReactiveFormsModule, SharedModule],
})
export class ReactiveModule {}
