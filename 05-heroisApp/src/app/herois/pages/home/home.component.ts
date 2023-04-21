import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container {
        margin: 10px;
      }
    `,
  ],
})
export class HomeComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  get user() {
    return this.authService.auth;
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
