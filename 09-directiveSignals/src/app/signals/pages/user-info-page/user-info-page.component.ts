import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {
  private userService = inject(UsersService)
  public userId = signal(1)

  public currentUser = signal<User | undefined>(undefined)
  public userWasFound = signal<boolean>(true)
  public fullName = computed<string>(() => {
    if(!this.currentUser()) return 'Usuário não encontrado'

    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`
  })

  ngOnInit(): void {
    this.loadUser(this.userId())
  }

  loadUser(idUser: number) {
    if(idUser <= 0) return;

    this.userId.set(idUser)
    this.currentUser.set(undefined)

    this.userService.getUserById(idUser).subscribe({
      next: user => {
        this.currentUser.set(user)
        this.userWasFound.set(true)

      },
      error: (error: Error) => {
        this.userWasFound.set(false)
      }
    })
  }

    /*
    - .set() => Estabelece um novo valor a todos os campos do signal
    - .update() => substitui o objeto inteiro;
    - .mutate() => apenas o atualiza sem substituir o objeto inteiro.
  */
}
