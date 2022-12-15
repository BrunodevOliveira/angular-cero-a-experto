import { Component, OnInit } from '@angular/core';
import { GifsServices } from 'src/app/gifs/services/gifs-services.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  get historico() {
    return this.gifsService.historico;
  }
  constructor(private gifsService: GifsServices) {}

  ngOnInit(): void {}
}
