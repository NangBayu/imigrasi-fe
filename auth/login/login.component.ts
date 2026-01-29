import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private notif: NzNotificationService,
  ) {}

  login() {
    const success = this.auth.login(this.username, this.password);

    if (!success) {
      this.notif.error('', 'Username atau password salah', {
        nzDuration: 5000,
      });
      return;
    }

    const user = this.auth.getCurrentUser();

    switch (user.role) {
      case 'pengguna':
        this.router.navigate(['/permohonan']);
        break;
      case 'pegawai':
        this.router.navigate(['/dashboard']);
        break;
      case 'admin':
        this.router.navigate(['/kelola-akun']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }
}
