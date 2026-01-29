import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  register() {
    this.auth.register({
      id: Date.now().toString(),
      username: this.username,
      password: this.password,
      role: 'pengguna',
    });
    this.router.navigate(['/login']);
  }
}
