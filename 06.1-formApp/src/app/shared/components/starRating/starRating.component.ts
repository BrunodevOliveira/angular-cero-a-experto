import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, forwardRef, OnInit } from '@angular/core';

@Component({
  selector: 'input-star-rating',
  templateUrl: './starRating.component.html',
  styleUrls: ['./starRating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true
    }
  ]
})
export class StarRatingComponent implements OnInit, ControlValueAccessor {
  private _rating: number = 3;
	ratingArr: number[] = [];

	ngOnInit(): void {
    for (let index = 0; index < 5; index++) {
      this.ratingArr.push(index);
		}
	}

  showIcon(index: number): string {
    return this._rating >= index + 1 ? 'star' : 'star_border';
	}
  onClick(rating: number): void {
    this._rating = rating;
    this._onChangeCb(this._rating)
    this._onTouchedCb(this._rating)
  }


  // ! Funções implmentadas pela interface ControlValueAcessor

  writeValue(valorDoFormControl: any): void {
    //^ Captura o valor passado para o FormControl
    console.log(valorDoFormControl);
    if(valorDoFormControl) {
      this._rating = valorDoFormControl
    }
  }

  registerOnChange(fn: Function): void {
    //^Registra no FormControl o o novo valor atribuido ao campo
    this._onChangeCb = fn
  }
  registerOnTouched(fn: Function): void {
    //^Executa o callback sempre que o usuário interagir com o formulário
    this._onTouchedCb = fn
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  //! Funções de callback que o angular irá manipular sempre que registerOnChange ou registerOnTouched forem chamadas
  private _onChangeCb: Function = (_value: any) => {}
  private _onTouchedCb: Function = (_value: any) => {}
}
