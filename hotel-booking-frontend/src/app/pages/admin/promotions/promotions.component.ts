import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  promotions: any[] = [];

  form: any = {
    title: '',
    discountPercentage: 0,
    startDate: '',
    endDate: ''
  };

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.adminService.getPromotions().subscribe((res: any) => {
      this.promotions = res;
    });
  }

  create() {
    if (!this.form.title || !this.form.discountPercentage || !this.form.startDate || !this.form.endDate) {
      alert('Fill all fields');
      return;
    }

    this.adminService.createPromotion(this.form).subscribe({
      next: () => {
        alert('Promotion created');
        this.form = {};
        this.load();
      },
      error: () => {
        alert('Failed to create');
      }
    });
  }

  delete(id: number) {
    this.adminService.deletePromotion(id).subscribe(() => {
      this.load();
    });
  }
}