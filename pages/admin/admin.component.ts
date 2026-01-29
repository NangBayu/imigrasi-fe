import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  username: string = '';
  password: string = '';

  constructor(private auth: AuthService) {}

  createPegawai() {
    this.auth.register({
      id: Date.now().toString(),
      username: this.username,
      password: this.password,
      role: 'pegawai',
    });
  }
}
