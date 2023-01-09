import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [],
})
export class Pagina1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('Constructor');
  }
  nome: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    // ! Se o seu componente não tiver entradas ou você o usar sem fornecer nenhuma entrada, a estrutura não chamará ngOnChanges().
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngDoCheck(): void {
    console.log(
      'ngDoCheck: ',
      'Chamado imediatamente após ngOnChanges() em cada execução de detecção de alteração e imediatamente após ngOnInit() na primeira execução.'
    );
  }

  ngOnDestroy(): void {
    console.log(
      'ngOnDestroy: ',
      'Chamado imediatamente antes de Angular destruir a diretiva ou componente.'
    );
  }

  guardar() {
    console.log('valor guardado');
  }
}
