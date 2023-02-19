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
    //! Utilizo reset ao vincés de setValue pois com ele posso enviar um obj que só irá alterar os valores que ele possui em comum com o miFormulario
    this.miFormulario.reset({
      ...this.persona,
      condiciones: false,
    });

    //! Dessa forma posso atualizar o valor da prop 'persona' sempre que houver modificação do formulário
    this.miFormulario.valueChanges.subscribe(({ condiciones, ...rest }) => {
      // delete form.condiciones;
      this.persona = rest; //* concentro os dados que qeuro no 'rest', assim é mais uma maneira de "excluir" o campo condiciones
    });

    // ! MAneira de subscrever apenas um campo do fomrulário
    // this.miFormulario.get('condiciones')?.valueChanges.subscribe((newValue) => {
    //   console.log(newValue);
    // });
  }

  guardar() {
    if (!this.miFormulario.get('condiciones')?.value)
      return console.log('Aceite os termos e condições');

    const formValue = { ...this.miFormulario.value };

    // ! Posso excluir algum campo do formulário dessa forma
    delete formValue.condiciones;
    console.log(formValue);

    this.persona = formValue;
  }
}
