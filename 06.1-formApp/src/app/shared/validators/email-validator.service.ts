import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { delay, Observable, of, pipe } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {
  // AbstractControl -> é o nosso FormControl

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>(
      (subscriber) => {
        console.log({ email });

        if (email === 'bruno@gmail.com') {
          subscriber.next({ emailTaken: true });
          subscriber.complete();
        }

        subscriber.next(null);
        subscriber.complete(); //Quando uum observable se completa não precisamos do 'return'
      }
    ).pipe(delay(2000));

    return httpCallObservable;
  }
}

// ! Forma mais básica
// validate(control: AbstractControl): Observable<ValidationErrors | null> {
//   const email = control.value;
//   console.log({ email });

//   return of({
//     emailTaken: true,
//   }).pipe(delay(2000));
// }

// ! Consumindo de uma API

// validate(control: AbstractControl): Observable<ValidationErrors | null> {
//   const email = control.value
//   return this.http.get<any[]>(`http://localhost:3000/users?q=${email}`)
//     .pipe(
//       map(resp => {
//         return resp.length === 0 ? null : {emailTaken: true}
//       })
//     )
// }
