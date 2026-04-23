import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  data: any = { name:'', email:'', password:'' };

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.data).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}