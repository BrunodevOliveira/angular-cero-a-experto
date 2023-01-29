import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  public miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [
        ['Angular', Validators.required],
        ['React', Validators.required],
      ],
      [Validators.required, Validators.minLength(3)] //! indica que o form deve possui pelo menos 3 campos
    ),
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  campoEsInvalido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) return;

    //! O push só aceita um argumento do tipo formControl, por isso preciso criar um ao invés de enviar nuevoFavorito diretamente
    this.favoritosArr.push(
      this.fb.control(this.nuevoFavorito.value, Validators.required)
    );

    this.nuevoFavorito.reset();
  }

  borrarFavorito(i: number) {
    this.favoritosArr.removeAt(i);
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
