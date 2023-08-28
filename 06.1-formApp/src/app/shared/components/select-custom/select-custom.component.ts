import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, OnInit } from '@angular/core';

@Component({
  selector: 'Select-custom',
  templateUrl: './select-custom.component.html',
  styleUrls: ['./select-custom.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectCustomComponent),
      multi: true
    }
  ]
})
export class SelectCustomComponent implements OnInit, ControlValueAccessor {


  ngOnInit() {
  }

  setValorForm(id: string, valor: string) {
    const setCampoForm = {
      1: 'receita',
      2: 'subConta',
      3: 'formaDePagamento'
    }
    // this.formulario.get(setCampoForm[+id]).setValue(valor)
  }


  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}


