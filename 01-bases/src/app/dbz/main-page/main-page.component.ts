import { Component, OnInit } from '@angular/core';

interface Ipersonagem {
  nome: string;
  poder: number;
}

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  novoPersonagem: Ipersonagem = {
    nome: 'Trunks',
    poder: 14000,
  };

  constructor() {}

  ngOnInit(): void {}

  //^ Essa é a forma "convencional de fazer um envio de formulário"
  enviarFormVanilla(event: SubmitEvent) {
    event.preventDefault();
    console.log(event);
  }

  //* o FormsModule é a maneira do Angular envia fomrulários de forma personalizada
  enviarForm() {
    console.log(this.novoPersonagem);
  }

  trocarNome(event: any) {
    console.log(event.target.value);
  }
}
