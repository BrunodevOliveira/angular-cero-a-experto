import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  private router = inject(Router);
  private authService = inject(AuthService);

  login() {
    this.authService.login().subscribe((user) => {
      if (user) this.router.navigate(['/herois']);
    });
  }
}
