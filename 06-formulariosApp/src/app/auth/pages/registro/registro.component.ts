import { ValidatorService } from './../../../shared/validator/validator.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {
  emailPattern,
  nombreApellidoPattern,
  noPuedeSerStrider,
} from 'src/app/shared/validator/validaciones';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {
  // ! Estágios de um form-> Válido | Inválido | Pendente de validação
  public miFormulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        '',
        [Validators.required, this.validatorService.noPuedeSerStrider],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      //! Segundo argumento do fb.group representa a validação de todo o formulário
      validators: [
        this.validatorService.camposIguales('password', 'password2'),
      ],
    }
  );

  // ! Será executado sempre que houver uma mudança no componente
  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    console.log('tick');

    if (errors?.required) {
      return 'Email es obrigatorio';
    } else if (errors?.pattern) {
      return 'Valor ingresado no tiene formato de correo';
    } else if (errors?.emailTomado) {
      return 'El email ya fue tomado';
    }

    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Brunno Oliveria',
      email: 'test1@test.com',
      username: 'setedeouros',
      password: '123456',
      password2: '123456',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    if (this.miFormulario.invalid) return this.miFormulario.markAllAsTouched(); //dispara a validação do método campoNoValido()

    console.log(this.miFormulario.value);
  }
}
