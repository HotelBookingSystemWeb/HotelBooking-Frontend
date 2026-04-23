// core/services/promotion.service.ts
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class PromotionService {

  constructor(private api: ApiService) {}

  getActive() {
    return this.api.get('/Admin/promotions/active');
  }
}