import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { map, delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  //! Implemento essa Validação assíncrona para ter acesso ao método validate()
  constructor(private http: HttpClient) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    console.log(email);

    return this.http
      .get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        delay(1000),
        //* uilizando o operador map posso trnasforma o valor da resposta (que é uma array) em um objeto contendo null (caso o email não exista) ou um error(caso exista)
        map((resp) => {
          return resp.length == 0 ? null : { emailTomado: true };
        })
      );
  }
}
