// core/services/hotel.service.ts
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class HotelService {

  constructor(private api: ApiService) {}

  getAll(location?: string) {
    return this.api.get('/Hotels' + (location ? '?location=' + location : ''));
  }

  getById(id: number) {
    return this.api.get('/Hotels/' + id);
  }

  create(data: any) {
    return this.api.post('/Hotels', data);
  }

  update(id: number, data: any) {
    return this.api.put('/Hotels/' + id, data);
  }

  delete(id: number) {
    return this.api.delete('/Hotels/' + id);
  }
}