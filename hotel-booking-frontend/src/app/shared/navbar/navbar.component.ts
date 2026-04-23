import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getUser() {
    const token: any = localStorage.getItem('token');
    if (!token) return null;
    return JSON.parse(atob(token.split('.')[1]));
  }

  isAdmin() {
    const user = this.getUser();
    return user?.['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Admin';
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}