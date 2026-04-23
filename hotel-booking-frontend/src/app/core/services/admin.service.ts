// core/services/admin.service.ts
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AdminService {

  constructor(private api: ApiService) {}

  getDashboard() {
    return this.api.get('/Admin/dashboard');
  }

  getPromotions() {
    return this.api.get('/Admin/promotions');
  }

  getPromotionById(id: number) {
    return this.api.get('/Admin/promotions/' + id);
  }

  createPromotion(data: any) {
    return this.api.post('/Admin/promotions', data);
  }

  updatePromotion(id: number, data: any) {
    return this.api.put('/Admin/promotions/' + id, data);
  }

  deletePromotion(id: number) {
    return this.api.delete('/Admin/promotions/' + id);
  }

  sendEmail(data: any) {
    return this.api.post('/Admin/promotions/send-email', data);
  }
}