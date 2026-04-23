import { Component } from '@angular/core';
import { BookingService } from 'src/app/core/services/booking.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-booking.component.html',
styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent {

  data: any = {
    roomId: '',
    checkInDate: '',
    checkOutDate: ''
  };

  constructor(private bookingService: BookingService, private router: Router) {}

  book() {
    this.bookingService.create(this.data).subscribe(() => {
      this.router.navigate(['/bookings']);
    });
  }
}