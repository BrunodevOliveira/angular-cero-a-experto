import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() {}

  // ! Validação personalizada
  noPuedeSerStrider(control: FormControl): ValidationErrors | null {
    const valor = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      return {
        noStrider: true,
      };
    }
    return null; //Quando retornamos null em uma VALIDAÇÃO significa que tudo está correto
  }

  camposIguales(campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      //* formgroup -> é todo o miFormulári passado por referência, por isso tenho acesso a todos os campos dele

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({ noIguales: true }); //pego o segundo campo e estabeleço o erro
        return {
          noIguales: true,
        };
      }

      formGroup.get(campo2)?.setErrors(null);

      return null;
    };
  }
}
