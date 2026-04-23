import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  templateUrl: './users.component.html',
styleUrls : ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAll().subscribe((res: any) => {
      this.users = res;
    });
  }

  toggle(id: number) {
    this.userService.toggleStatus(id).subscribe(() => {
      this.ngOnInit();
    });
  }

  delete(id: number) {
    this.userService.delete(id).subscribe(() => {
      this.ngOnInit();
    });
  }
}