import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-riwayat',
  templateUrl: './riwayat.component.html',
  styleUrls: ['./riwayat.component.css'],
})
export class RiwayatComponent implements OnInit {
  requests: any[] = [];

  constructor(private auth: AuthService) {}

  ngOnInit() {
    const userId = this.auth.getCurrentUser().id;
    const all = JSON.parse(localStorage.getItem('requests')!) || [];
    this.requests = all.filter((r: any) => r.userId === userId);
  }
}
