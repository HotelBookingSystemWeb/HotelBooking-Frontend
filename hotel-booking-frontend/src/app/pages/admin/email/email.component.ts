import { Component } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  templateUrl: './email.component.html',
styleUrls:['./email.component.css']
})
export class EmailComponent {

  data: any = { subject: '', body: '' };

  constructor(private adminService: AdminService) {}

  send() {
    this.adminService.sendEmail(this.data).subscribe(() => {
      alert('Email Sent');
    });
  }
}