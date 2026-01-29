import { Component } from '@angular/core';

@Component({
  selector: 'app-pegawai',
  templateUrl: './pegawai.component.html',
  styleUrl: './pegawai.component.css',
})
export class PegawaiComponent {
  approve(id: number) {
    const data = JSON.parse(localStorage.getItem('requests')!);
    const req = data.find((r: any) => r.id === id);
    req.status = 'approved';
    localStorage.setItem('requests', JSON.stringify(data));
  }
}
