import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [],
})
export class DynamicPageComponent {
  private fb: FormBuilder = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Death Stranding', Validators.required],
      ],
      Validators.required
    ),
  });

  public newFavorite: FormControl = new FormControl('', Validators.required);

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }

  isInvalidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors! && this.myForm.controls[field].touched
    );
  }

  onAddToFavorites(): void {
    if (this.newFavorite.invalid) return;

    const newGame = this.newFavorite.value;

    // this.favoriteGames.push(new FormControl(newGame, Validators.required))
    this.favoriteGames.push(this.fb.control(newGame, Validators.required));
    this.newFavorite.reset();
  }

  onDeleteFavorite(index: number): void {
    this.favoriteGames.removeAt(index);
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      console.log('Form inválido!');
      return;
    }
    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }
}
