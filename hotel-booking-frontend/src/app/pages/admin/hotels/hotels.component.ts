import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/core/services/hotel.service';

@Component({
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: any[] = [];

  // 🔥 MATCH HTML
  newHotel: any = {
    name: '',
    location: '',
    description: ''
  };

  constructor(
    private hotelService: HotelService,
    private router: Router
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.hotelService.getAll().subscribe((res: any) => {
      this.hotels = res;
    });
  }

  // 🔥 MATCH HTML
  add() {
    this.hotelService.create(this.newHotel).subscribe(() => {
      this.newHotel = { name: '', location: '', description: '' };
      this.load();
    });
  }

  delete(id: number) {
    this.hotelService.delete(id).subscribe(() => {
      this.load();
    });
  }

  // 🔥 MATCH HTML
  manageRooms(hotelId: number) {
    this.router.navigate(['/admin/rooms', hotelId]);
  }
}