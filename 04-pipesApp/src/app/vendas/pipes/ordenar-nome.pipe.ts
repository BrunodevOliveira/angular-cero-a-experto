import { Pipe, PipeTransform } from '@angular/core';
import { Heroi } from '../interfaces/vendas.interface';

type teste = {
  nome: () => Heroi[];
  color: () => Heroi[];
  voa: () => Heroi[];
  'sem valor': () => Heroi[];
};

@Pipe({
  name: 'ordenarNome',
})
export class OrdenarNomePipe implements PipeTransform {
  transform(herois: Heroi[], ordenarPor: string = 'sem valor'): Heroi[] {
    const tipoDeOrdem: any = {
      nome: () => herois.sort((a, b) => (a.nome > b.nome ? 1 : -1)),
      color: () => herois.sort((a, b) => (a.color > b.color ? 1 : -1)),
      voa: () => herois.sort((a, b) => (a.voa > b.voa ? -1 : 1)),
      'sem valor': () => herois,
    };
    return tipoDeOrdem[ordenarPor]();

    // switch (ordenarPor) {
    //   case 'nome':
    //     return herois.sort((a, b) => (a.nome > b.nome ? 1 : -1));

    //   case 'voa':
    //     return herois.sort((a, b) => (a.voa > b.voa ? -1 : 1));

    //   case 'cor':
    //     return herois.sort((a, b) => (a.color > b.color ? 1 : -1));

    //   default:
    //     return herois;
    // }
  }
}