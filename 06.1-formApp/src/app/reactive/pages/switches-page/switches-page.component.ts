import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';

interface MyForm {
  gender: FormControl<string>;
  wantNotifications: FormControl<boolean>;
  termsAndConditions: FormControl<boolean>;
}
type FormKeys = keyof MyForm;

@Component({
  templateUrl: './switches-page.component.html',
  styles: [],
})
export class SwitchesPageComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);

  public myForm: FormGroup = this.fb.nonNullable.group({
    //Tipar FormGroup<MyForm>
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  public person = {
    gender: 'F',
    wantNotifications: false,
  };

  //! acesso a cada propriedade do fomrulário de forma tipada:
  // public valuesForm: MyForm = this.myForm.controls;

  ngOnInit(): void {}

  isInvalidField(field: FormKeys): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    const { termsAndConditions, ...newPerson } = this.myForm.value;

    this.person = newPerson;
    console.log(this.myForm.value);
    console.log(this.person);

    // this.myForm.controls['termsAndConditions'].setValue('eferferf') //! => Sem tipagem
    //this.myForm.controls.termsAndConditions.setValue('eferferf') //! Com tipagem
  }
}
