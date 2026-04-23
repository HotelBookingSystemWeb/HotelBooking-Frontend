import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/core/services/booking.service';

@Component({
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.load();
    this.bookingService.getAll().subscribe((res: any) => {
      this.bookings = res;
    });
  }
  load() {
  this.bookingService.getAll().subscribe((res: any) => {
    this.bookings = res;
  });
}
  cancel(id: number) {
  if (!confirm('Are you sure you want to cancel this booking?')) return;

  this.bookingService.cancel(id).subscribe({
    next: () => {
      alert('Booking cancelled');
      this.load(); // 🔥 reload data
    },
    error: () => {
      alert('Failed to cancel');
    }
  });
}
}