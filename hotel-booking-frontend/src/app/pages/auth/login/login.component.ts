import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data: any = { email: '', password: '' };
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

 login() {
  this.auth.login(this.data).subscribe({
    next: (res: any) => {

      this.auth.saveToken(res.token);

      const payload = JSON.parse(atob(res.token.split('.')[1]));

      const role = payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

      if (role === 'Admin') {
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.router.navigate(['/home']);
      }
    },
    error: () => {
      this.error = 'Invalid credentials';
    }
  });
}}