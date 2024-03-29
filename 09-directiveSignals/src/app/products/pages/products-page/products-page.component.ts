import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  private fb = inject(FormBuilder)

  public color: string = 'blue'

  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]],
  })

  changeColor() {
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

    this.color = color
  }
}
