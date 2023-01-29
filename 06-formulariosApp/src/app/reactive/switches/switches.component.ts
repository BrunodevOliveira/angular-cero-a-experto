import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    //! Utilizo reset ao vincés de setValue pois com ele posso enviar um obj que só irá alterar os valores que ele possui em omum com o miFormulario
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false,
    });

    // ! MAneira de subscrever apenas um campo do fomrulário
    // this.miFormulario.get('condiciones')?.valueChanges.subscribe((newValue) => {
    //   console.log(newValue);
    // });

    this.miFormulario.valueChanges.subscribe(({ condiciones, ...rest }) => {
      // delete form.condiciones;
      this.persona = rest;
    });
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };

    // ! Posso excluir algum campo do formulário dessa forma
    delete formValue.condiciones;
    console.log(formValue);

    this.persona = formValue;
  }
}
