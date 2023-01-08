import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  // activatedRoute => capturo qualquer alteração de URL
  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   console.log(id); //! Exibe um objeto com os parametros enviados pela rota
    //   this.paisService.buscarPaisPorAlpha(id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });

    //* SwithMap -> Permite receber um Observable e retornar um novo Observable
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.buscarPaisPorAlpha(id)),
        tap(console.log) // tap -> operador que dispara um efeito secundário
      )
      .subscribe((pais) => (this.pais = pais));
  }
}
