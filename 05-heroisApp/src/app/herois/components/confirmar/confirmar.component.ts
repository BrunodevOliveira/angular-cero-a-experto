import { Herois } from './../../interfaces/herois.interfaces';
import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [],
})
export class ConfirmarComponent {
  private dialogRef = inject(MatDialogRef<ConfirmarComponent>);
  public heroi: Herois = inject(MAT_DIALOG_DATA);
  // @Inject (MAT_DIALOG_DATA) public data: Heroe -> Essa é a forma padrão que injetariamos no constructor

  excluir() {
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close();
    // console.log(this.heroi.superhero);
  }
}
