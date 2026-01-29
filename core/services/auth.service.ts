import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private USERS = 'users';
  private LOGIN = 'login';

  constructor() {
    if (!localStorage.getItem(this.USERS)) {
      localStorage.setItem(
        this.USERS,
        JSON.stringify([
          {
            id: '1',
            username: 'admin',
            password: 'admin123',
            role: 'admin',
          },
          {
            id: '2',
            username: 'pegawai',
            password: 'pegawai123',
            role: 'pegawai',
          },
          {
            id: '3',
            username: 'user',
            password: 'user123',
            role: 'pengguna',
          },
        ]),
      );
    }
  }

  login(username: string, password: string) {
    const users = this.getUsers();
    const user = users.find(
      (u: any) => u.username === username && u.password === password,
    );
    if (user) {
      localStorage.setItem(this.LOGIN, JSON.stringify(user));
      return true;
    }
    return false;
  }

  register(user: any) {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.USERS, JSON.stringify(users));
  }

  getCurrentUser() {
    const user = localStorage.getItem(this.LOGIN);
    return user ? JSON.parse(user) : null;
  }

  logout() {
    localStorage.removeItem(this.LOGIN);
  }

  isLoggedIn() {
    return !!this.getCurrentUser();
  }

  getUsers() {
    return JSON.parse(localStorage.getItem(this.USERS)!) || [];
  }
}
