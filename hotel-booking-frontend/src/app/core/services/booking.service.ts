// core/services/booking.service.ts
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class BookingService {

  constructor(private api: ApiService) {}

  create(data: any) {
    return this.api.post('/Bookings', data);
  }

 getAll() {
  return this.api.get('/Bookings/all'); // ✅ FIX
}

  cancel(id: number) {
    return this.api.put('/Bookings/' + id + '/cancel', {});
  }

  updateStatus(id: number, data: any) {
    return this.api.put('/Bookings/' + id + '/status', data);
  }
  getMyBookings() {
  return this.api.get('/Bookings'); // 🔥 this is correct for user
}
}