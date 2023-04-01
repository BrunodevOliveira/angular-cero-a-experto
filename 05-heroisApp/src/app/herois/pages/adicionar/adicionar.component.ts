import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { Herois, Publisher } from '../../interfaces/herois.interfaces';
import { HeroisService } from '../../services/herois.service';
import { filter, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 4px;
      }
    `,
  ],
})
export class AdicionarComponent implements OnInit {
  public publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  public heroi: Herois = {
    superhero: '',
    alter_ego: '',
    publisher: Publisher.DCComics,
    first_appearance: '',
    characters: '',
    alt_img: '',
  };

  private heroisService = inject(HeroisService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private matDialog = inject(MatDialog);

  ngOnInit(): void {
    // Caso o heroi tenha ID, fazemos uma requisição para obter os dados dele.
    if (!this.router.url.includes('editar')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroisService.getHeroi(id)))
      .subscribe((heroi) => (this.heroi = heroi));
  }

  //! Como utilizamos a mesma página para salvar e editar um herói podemos fazer a distinção dessas duas ações verificando se o heroi possui Id ou não
  salvar() {
    if (this.heroi.superhero.trim().length == 0) return;

    if (this.heroi.id) {
      // atualizar
      this.heroisService.atualizarHeroi(this.heroi).subscribe((heroi) => {
        this.heroi = heroi;
        this.exibirSnackbar('Registro atualizado');
      });
    } else {
      // criar
      this.heroisService.adicionarHeroi(this.heroi).subscribe((heroi) => {
        console.log('Adicionou o heroi:', heroi);
        this.exibirSnackbar('Heroi adicionado');
        this.router.navigate(['/herois', heroi.id]);
      });
    }
  }

  excluir() {
    const dialog = this.matDialog.open(ConfirmarComponent, {
      width: '300px',
      data: { ...this.heroi },
    });

    // dialog.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.heroisService.apagarHeroi(this.heroi.id!).subscribe((_) => {
    //       this.router.navigate(['/herois/listar']);
    //     });
    //   }
    // });
    dialog
      .afterClosed()
      .pipe(
        filter((result) => !!result), // as Exclamações Transformam o valor em um booleano, caso seja false, não continuamos o código
        switchMap(() => this.heroisService.apagarHeroi(this.heroi.id!))
      )
      .subscribe(() => {
        this.router.navigate(['/herois/listar']);
      });
  }

  exibirSnackbar(mensagem: string) {
    this.snackBar.open(mensagem, 'ok!', {
      duration: 2500,
    });
  }
}
