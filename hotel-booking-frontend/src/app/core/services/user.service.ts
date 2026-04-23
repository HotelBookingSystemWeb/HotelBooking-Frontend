// core/services/user.service.ts
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private api: ApiService) {}

  getAll() {
    return this.api.get('/Users');
  }

  getProfile() {
    return this.api.get('/Users/me');
  }

  updateProfile(data: any) {
    return this.api.put('/Users/me', data);
  }

  delete(id: number) {
    return this.api.delete('/Users/' + id);
  }

  toggleStatus(id: number) {
    return this.api.patch('/Users/' + id + '/toggle-status', {});
  }
}