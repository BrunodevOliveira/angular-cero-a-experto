import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { AddPersonagemComponent } from './add-personagem/add-personagem.component';
import { DbzService } from './services/dbz.services';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonagensComponent,
    AddPersonagemComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
  providers: [
    //São os serviços do modulo
    DbzService,
  ],
})
export class DbzModule {}
