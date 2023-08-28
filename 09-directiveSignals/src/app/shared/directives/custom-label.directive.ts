import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{
  @Input() set color(value: string) {
    // console.log(value);
    this._color = value
    this.setStyle()
  }
  @Input() set errors(value: ValidationErrors | null | undefined) {
    // console.log(value);
    this._errors = value
    this.setErrorMessage()
  }

  private el = inject(ElementRef<HTMLElement>)
  private htmlElement?: ElementRef<HTMLElement>
  private _color: string = 'red'
  private _errors?: ValidationErrors | null

  ngOnInit(): void {
    // console.log('Diretiva aplicada no elemento:', this.el)
    this.htmlElement = this.el

    // this.htmlElement.nativeElement.innerHTML = 'Adicionando valor ao span'
    this.setStyle()
  }

  setStyle() {
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color
  }

  setErrorMessage() {
    if(!this.htmlElement) return;
    if(!this._errors) {
      this.htmlElement.nativeElement.innerText = 'Sem erros 😄'
      return
    }

    const errors = Object.keys(this._errors)
    console.log(errors);

    if(errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este campo é obrigatório.'
      return
    }

    if(errors.includes('minlength')) {
      const min = this._errors!['minlength']['requiredLength']
      const current = this._errors!['minlength']['actualLength']
      this.htmlElement.nativeElement.innerText = `Mínimo ${current}/${min} caractéres.`
      return
    }
    if(errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'Email incorreto.'
      return
    }
  }

}
