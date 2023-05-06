import { EmailValidator } from './../../../shared/validators/email-validator.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import * as customValidators from 'src/app/shared/validators/validators';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  private fb: FormBuilder = inject(FormBuilder);
  private validatorsService = inject(ValidatorsService);
  private emailValidator = inject(EmailValidator);

  public myForm: FormGroup = this.fb.nonNullable.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(
            this.validatorsService.firstNameAndLastnamePattern
          ),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorsService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        '',
        [Validators.required, this.validatorsService.cantBeStrider],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        //! Essa validações terão acesso a todo o Form e não apenas ao controle que estão associados | Vídeo 252 min 3:10
        this.validatorsService.isFieldOneEqualFieldTwo('password', 'password2'),
      ],
    }
  );

  isInvalidField(field: string) {
    return this.validatorsService.isInvalidField(this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
    this.myForm.get('name')?.valueChanges.subscribe;
  }
}
