import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './componente-personalizado.component.html',
  styleUrls:['./componente-personalizado.component.scss'],

})
export class ComponentePersonalizadoComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder)
  public formulario!: FormGroup

  ngOnInit() {
    this.formulario = this.fb.group({
      title: ['', Validators.required],
      rating: [3, Validators.min(3)]
    })
  }

  clickSave(): void {
		console.log('valid--> ', this.formulario.valid);
	}




}
