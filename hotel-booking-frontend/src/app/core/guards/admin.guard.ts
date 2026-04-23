// core/guards/admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {

    const token: any = localStorage.getItem('token');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

   const payload = JSON.parse(atob(token.split('.')[1]));

const role = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

if (role !== 'Admin') {
  this.router.navigate(['/home']);
  return false;
}

    return true;
  }
}