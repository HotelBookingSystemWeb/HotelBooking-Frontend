import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/core/services/booking.service';

@Component({
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  bookings: any[] = [];
  loading = true;

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.bookingService.getMyBookings().subscribe({
      next: (res: any) => {
        console.log("MY BOOKINGS:", res); // 🔥 debug
        this.bookings = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('Failed to load bookings');
      }
    });
  }

  cancel(booking: any) {
    console.log("CANCEL BOOKING:", booking); // 🔥 check id

    this.bookingService.cancel(booking.id).subscribe({
      next: () => {
        alert('Booking cancelled');

        // 🔥 instant UI update
        booking.status = 'Cancelled';
      },
      error: (err) => {
        console.log(err); // 🔥 see actual error
        alert('Cancel failed');
      }
    });
  }
}