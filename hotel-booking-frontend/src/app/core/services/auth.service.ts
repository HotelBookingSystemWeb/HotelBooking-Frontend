// core/services/auth.service.ts
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private api: ApiService) {}

  register(data: any) {
    return this.api.post('/auth/register', data);
  }

  login(data: any) {
    return this.api.post('/auth/login', data);
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

  getUser() {
    const token: any = this.getToken();
    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  }

  isAdmin() {
    const user = this.getUser();
    return user?.role === 'Admin';
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}