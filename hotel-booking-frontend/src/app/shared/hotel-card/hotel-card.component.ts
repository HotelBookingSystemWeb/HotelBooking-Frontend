import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.css']
})
export class HotelCardComponent {

  @Input() hotel: any;

  constructor(private router: Router) {}

  viewDetails() {
    this.router.navigate(['/hotels', this.hotel.id]);
  }
}