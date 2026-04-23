import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelId: any;
  rooms: any[] = [];

  form: any = {
    roomNumber: '',
    price: '',
    capacity: ''
  };

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute
  ) {}

 ngOnInit() {
  this.hotelId = this.route.snapshot.params['hotelId'];

  if (!this.hotelId) {
    alert('Select a hotel first');
    return;
  }

  this.load();
}

  load() {
    // 🔥 Filter rooms by hotelId
    this.roomService.getAll({ hotelId: this.hotelId }).subscribe((res: any) => {
      this.rooms = res;
    });
  }

  create() {
    // 🔥 Auto attach hotelId
    const data = {
      ...this.form,
      hotelId: this.hotelId
    };

    this.roomService.create(data).subscribe(() => {
      this.form = {};
      this.load();
    });
  }

  delete(id: number) {
    this.roomService.delete(id).subscribe(() => {
      this.load();
    });
  }
}