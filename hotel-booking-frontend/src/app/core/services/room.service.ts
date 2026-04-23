import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class RoomService {

  constructor(private api: ApiService) {}

  getAll(filters: any) {
    let query = '?';

    if (filters.hotelId) query += 'hotelId=' + filters.hotelId + '&';
    if (filters.minPrice) query += 'minPrice=' + filters.minPrice + '&';
    if (filters.maxPrice) query += 'maxPrice=' + filters.maxPrice;

    return this.api.get('/Rooms' + query);
  }

  // 🔥 NEW METHOD (IMPORTANT)
  getAvailable(hotelId: number, checkIn: string, checkOut: string) {
    return this.api.get(
      `/Rooms/available?hotelId=${hotelId}&checkIn=${checkIn}&checkOut=${checkOut}`
    );
  }

  getById(id: number) {
    return this.api.get('/Rooms/' + id);
  }

  create(data: any) {
    return this.api.post('/Rooms', data);
  }

  update(id: number, data: any) {
    return this.api.put('/Rooms/' + id, data);
  }

  delete(id: number) {
    return this.api.delete('/Rooms/' + id);
  }
}