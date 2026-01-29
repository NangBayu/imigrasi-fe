import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css',
})
export class DashboardAdminComponent {
  totalUsers: number = 0;
  penggunaCount: number = 0;
  pegawaiCount: number = 0;
  adminCount: number = 0;

  totalRequests: number = 0;
  pending: number = 0;
  approved: number = 0;
  rejected: number = 0;

  ngOnInit() {
    this.loadUsers();
    this.loadRequests();
  }

  loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')!) || [];
    this.totalUsers = users.length;
    this.penggunaCount = users.filter((u: any) => u.role === 'pengguna').length;
    this.pegawaiCount = users.filter((u: any) => u.role === 'pegawai').length;
    this.adminCount = users.filter((u: any) => u.role === 'admin').length;
  }

  loadRequests() {
    const requests = JSON.parse(localStorage.getItem('requests')!) || [];
    this.totalRequests = requests.length;
    this.pending = requests.filter((r: any) => r.status === 'pending').length;
    this.approved = requests.filter((r: any) => r.status === 'approved').length;
    this.rejected = requests.filter((r: any) => r.status === 'rejected').length;
  }
}
