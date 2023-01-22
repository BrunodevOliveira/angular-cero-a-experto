import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-exibir-nome',
  templateUrl: './exibir-nome.component.html',
  styles: [],
})
export class ExibirNomeComponent implements OnInit, OnChanges {
  @Input() nome!: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {}
}
