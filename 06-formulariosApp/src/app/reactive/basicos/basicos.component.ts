import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  /*
    miFormulario: FormGroup = new FormGroup({
      nombre: new FormControl('RTX 4080Ti'),
      precio: new FormControl(1500),
      existencias: new FormControl(5),
    });
  */

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(0), Validators.required]],
    //Após o valor do campo, o array recebe mais dois valores: Validadores síncronos e assíncronos (são separados por vírgula)
  });

  // FormBuilder serve para auxiliar na criação de formularios complexos(grandes). Com ele não precisamos instanciar um new FormGroup para cada elemento do formulário
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Utilizo o método "reset" ao invés do "setValue" pois com ele posso deixar de passar alguma valor obrigatório do form, por ex, existencias
    this.miFormulario.reset({
      nombre: 'RTX 3080',
      precio: 3800,
      // existencias: 50,
    });
  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
    //~ Verifica se o campo controlado pelo formGroup já foi tocado e se satisfaz todas as validações criadas no Validators em fb.goup através do "errors"
  }

  guardar() {
    if (this.miFormulario.invalid) {
      //! Marca todos os campos para que seja ativada a validação do método CamposEsValido()
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
