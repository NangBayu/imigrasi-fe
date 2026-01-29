import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-pengguna',
  templateUrl: './pengguna.component.html',
  styleUrls: ['./pengguna.component.css'],
})
export class PenggunaComponent {
  nama: string = '';
  paspor: string = '';
  tujuan: string = '';
  tanggal: string = ''; // pakai string biar ng-input date aman

  constructor(
    private auth: AuthService,
    private notif: NzNotificationService,
  ) {}

  submit() {
    if (!this.nama || !this.paspor || !this.tujuan || !this.tanggal) {
      this.notif.warning('', 'Lengkapi semua field!', { nzDuration: 5000 });
      return;
    }

    const data = JSON.parse(localStorage.getItem('requests')!) || [];
    data.push({
      id: Date.now(),
      userId: this.auth.getCurrentUser().id,
      nama: this.nama,
      paspor: this.paspor,
      tujuan: this.tujuan,
      tanggal: this.tanggal,
      status: 'pending',
    });
    localStorage.setItem('requests', JSON.stringify(data));
    this.notif.success('', 'Permohonan berhasil dikirim!', {
      nzDuration: 5000,
    });

    // reset form
    this.nama = '';
    this.paspor = '';
    this.tujuan = '';
    this.tanggal = '';
  }
}
