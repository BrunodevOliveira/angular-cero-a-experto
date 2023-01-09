import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { ExibirNomeComponent } from './components/exibir-nome/exibir-nome.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, Pagina1Component, ExibirNomeComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
