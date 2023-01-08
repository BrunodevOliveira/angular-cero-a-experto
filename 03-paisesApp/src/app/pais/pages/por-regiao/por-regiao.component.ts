import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'por-regiao',
  templateUrl: './por-regiao.component.html',
  styles: [
    `
      button {
        margin-right: 0.3rem;
      }
    `,
  ],
})
export class PorRegiaoComponent implements OnInit {
  regioes: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  paises: Country[] = [];
  regiaoAtiva: string = '';
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  getClasseCSS(regiao: string) {
    return regiao === this.regiaoAtiva ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  ativarRegiao(regiao: string) {
    if (regiao === this.regiaoAtiva) return;

    this.regiaoAtiva = regiao;
    this.paisService
      .buscarPaisPorRegiao(regiao)
      .pipe(tap(console.log))
      .subscribe((paises) => (this.paises = paises));
  }
}
