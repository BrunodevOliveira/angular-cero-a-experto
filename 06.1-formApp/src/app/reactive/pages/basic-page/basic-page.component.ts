import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 2,
};

@Component({
  templateUrl: './basic-page.component.html',
  styles: [],
})
export class BasicPageComponent implements OnInit, OnDestroy {
  private fb: FormBuilder = inject(FormBuilder);

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [], []), //Valor default, [Validações síncronas],[assíncronas]
  //   price: new FormControl(0),
  //   inStorage: new FormControl(0),
  // });

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]], //Valor default, [Validações síncronas],[Validações assíncronas]
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]],
  });

  ngOnInit(): void {
    //this.myForm.reset(rtx5090); //Pode ser uma requisição a API para completar o formulário
  }

  isInvalidField(field: string): boolean {
    return (
      this.myForm.controls[field].errors! && this.myForm.controls[field].touched
    );
  }

  getFieldError(field: string): string | null {
    if (!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const chave of Object.keys(errors)) {
      switch (chave) {
        case 'required':
          return 'Esse campo é obrigatório';
        case 'minlength':
          return `Mínimo  ${errors['minlength'].requiredLength} caracteres.`;
      }
    }
    return null;
  }

  onSave(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset({ price: 10, inStorage: 0 }); //!Restabelecer valor do formulário e dos campos "Pristine", "touched"
  }

  ngOnDestroy(): void {
    console.log('Morri ☠️');
  }
}
