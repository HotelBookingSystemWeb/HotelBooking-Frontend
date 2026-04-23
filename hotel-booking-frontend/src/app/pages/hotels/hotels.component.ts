import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from 'src/app/core/services/hotel.service';

@Component({
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: any[] = [];
  allHotels: any[] = [];
  loading = true;

  searchText: string = '';

  constructor(
    private hotelService: HotelService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels() {
    this.hotelService.getAll().subscribe((res: any) => {
      this.hotels = res;
      this.allHotels = res;
      this.loading = false;
    });
  }

  search() {
    if (!this.searchText) {
      this.hotels = this.allHotels;
      return;
    }

    const text = this.searchText.toLowerCase();

    this.hotels = this.allHotels.filter(h =>
      h.name.toLowerCase().includes(text) ||
      h.location.toLowerCase().includes(text)
    );
  }

  viewDetails(id: number) {
    this.router.navigate(['/hotels', id]);
  }
}