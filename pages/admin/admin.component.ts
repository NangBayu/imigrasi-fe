import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  users: any[] = [];
  currentUser: any = { username: '', password: '', role: 'pengguna' };
  isModalVisible: boolean = false;
  modalTitle: string = 'Tambah Akun';
  isEditMode: boolean = false;

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.users = JSON.parse(localStorage.getItem('users')!) || [];
  }

  openAddModal() {
    this.isEditMode = false;
    this.modalTitle = 'Tambah Akun';
    this.currentUser = { username: '', password: '', role: 'pengguna' };
    this.isModalVisible = true;
  }

  openEditModal(user: any) {
    this.isEditMode = true;
    this.modalTitle = 'Edit Akun';
    this.currentUser = { ...user };
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }

  saveUser() {
    let users = JSON.parse(localStorage.getItem('users')!) || [];
    if (this.isEditMode) {
      const index = users.findIndex(
        (u: any) => u.username === this.currentUser.username,
      );
      if (index !== -1) users[index] = this.currentUser;
    } else {
      users.push({ ...this.currentUser, id: Date.now().toString() });
    }
    localStorage.setItem('users', JSON.stringify(users));
    this.loadUsers();
    this.closeModal();
  }

  deleteUser(user: any) {
    let users = JSON.parse(localStorage.getItem('users')!) || [];
    users = users.filter((u: any) => u.username !== user.username);
    localStorage.setItem('users', JSON.stringify(users));
    this.loadUsers();
  }
}
