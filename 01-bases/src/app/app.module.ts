import { ContadorModule } from './contador/contador.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesModule } from './herois/heroes.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, ContadorModule],
  providers: [],
  bootstrap: [AppComponent], //indica que é o módulo principal da aplicação
})
export class AppModule {}
