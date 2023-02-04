import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VendasModule } from './vendas/vendas.module';

//! Trocar localidade da aplicação de forma global
import localeBr from '@angular/Common/locales/pt';
import localeFr from '@angular/Common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeBr);
registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent],
  imports: [AppRouterModule, BrowserModule, SharedModule, VendasModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }], //! Passo em useValue a mesma localidade que inportei em localeBr
  bootstrap: [AppComponent],
})
export class AppModule {}
