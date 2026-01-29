import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  totalRequests: number = 0;
  pending: number = 0;
  approved: number = 0;
  rejected: number = 0;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    const all = JSON.parse(localStorage.getItem('requests')!) || [];
    this.totalRequests = all.length;
    this.pending = all.filter((r: any) => r.status === 'pending').length;
    this.approved = all.filter((r: any) => r.status === 'approved').length;
    this.rejected = all.filter((r: any) => r.status === 'rejected').length;
  }
}
