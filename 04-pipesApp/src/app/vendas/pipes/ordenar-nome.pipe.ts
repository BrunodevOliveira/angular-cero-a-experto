import { Pipe, PipeTransform } from '@angular/core';
import { Heroi } from '../interfaces/vendas.interface';

type listaDeHeroisOrdenada = {
  [key: string]: () => Heroi[];
};

@Pipe({
  name: 'ordenarNome',
})
export class OrdenarNomePipe implements PipeTransform {
  transform(herois: Heroi[], ordenarPor: string = 'sem valor'): Heroi[] {
    const tipoDeOrdem: listaDeHeroisOrdenada = {
      nome: () => herois.sort((a, b) => a.nome.localeCompare(b.nome)),
      color: () => herois.sort((a, b) => (a.color > b.color ? 1 : -1)),
      voa: () => herois.sort((a, b) => (a.voa > b.voa ? -1 : 1)),
      'sem valor': () => herois,
    };
    return tipoDeOrdem[ordenarPor]();

    //! "localeCompare()" é usado para comparar dois valores de string e determinar qual vem antes na ordem alfabética.
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
