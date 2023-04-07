import { Component } from '@angular/core';

interface MenuItem {
  rota: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent {
  menu: MenuItem[] = [
    {
      rota: 'graficos/barra',
      texto: 'Barras',
    },
    {
      rota: 'graficos/barra-doble',
      texto: 'Barras duplas',
    },
    {
      rota: 'graficos/donut',
      texto: 'Rosquinha',
    },
    {
      rota: 'graficos/donut-http',
      texto: 'Rosquinha Http',
    },
  ];
}
