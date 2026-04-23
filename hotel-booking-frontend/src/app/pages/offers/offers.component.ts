import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/core/services/promotion.service';

@Component({
  templateUrl: './offers.component.html'
})
export class OffersComponent implements OnInit {

  offers: any[] = [];
  loading = true;

  constructor(private promoService: PromotionService) {}

  ngOnInit() {
    this.promoService.getActive().subscribe({
      next: (res: any) => {
        console.log("OFFERS:", res);
        this.offers = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        alert('Failed to load offers');
      }
    });
  }
}