import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/core/services/booking.service';
import { HotelService } from 'src/app/core/services/hotel.service';
import { RoomService } from 'src/app/core/services/room.service';

@Component({
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  hotel: any;
  rooms: any[] = [];

  hotelId: any;

  checkInDate: string = '';
  checkOutDate: string = '';

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private roomService: RoomService,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    this.hotelId = this.route.snapshot.params['id'];

    this.hotelService.getById(this.hotelId).subscribe((res: any) => {
      this.hotel = res;
    });

    this.loadAllRooms();
  }

  // 🔥 initial load
  loadAllRooms() {
    this.roomService.getAll({ hotelId: this.hotelId }).subscribe((res: any) => {
      this.rooms = res;
    });
  }

  // 🔥 filter by date
  loadAvailableRooms() {

    if (!this.checkInDate || !this.checkOutDate) {
      alert('Select dates first');
      return;
    }

    if (new Date(this.checkOutDate) <= new Date(this.checkInDate)) {
      alert('Check-out must be after Check-in');
      return;
    }

    this.roomService
      .getAvailable(this.hotelId, this.checkInDate, this.checkOutDate)
      .subscribe((res: any) => {
        this.rooms = res;
      });
  }

  // 🔥 FIXED booking
 bookRoom(room: any) {

  console.log("ROOM CLICKED:", room);

  const token = localStorage.getItem('token');

  if (!token) {
    alert('Please login first');
    return;
  }

  if (!this.checkInDate || !this.checkOutDate) {
    alert('Please select dates first');
    return;
  }

  if (new Date(this.checkOutDate) <= new Date(this.checkInDate)) {
    alert('Check-out must be after Check-in');
    return;
  }

  // 🔥 DEBUG
  console.log("FINAL ROOM ID:", room.id);

  const request = {
    roomId: room.id,  // ✅ always correct now
    checkInDate: this.checkInDate,
    checkOutDate: this.checkOutDate
  };

  console.log("REQUEST:", request);

  this.bookingService.create(request).subscribe({
    next: () => {
      alert('Booking successful');
      this.loadAvailableRooms();
    },
    error: (err) => {
      console.log("ERROR:", err);
      alert(err.error?.message || 'Booking failed');
    }
  });
}

   
getTotalPrice(price: number) {

  if (!this.checkInDate || !this.checkOutDate) return price;

  const days =
    (new Date(this.checkOutDate).getTime() -
     new Date(this.checkInDate).getTime()) / (1000 * 60 * 60 * 24);

  return days > 0 ? price * days : price;
}
}