import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  templateUrl: './profile.component.html',
styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = {};
  success = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getProfile().subscribe((res: any) => {
      this.user = res;
    });
  }

  update() {
    this.userService.updateProfile(this.user).subscribe(() => {
      this.success = 'Profile updated successfully';
    });
  }
}