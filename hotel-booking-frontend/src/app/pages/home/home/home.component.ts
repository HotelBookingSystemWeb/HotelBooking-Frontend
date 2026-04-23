import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/core/services/hotel.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hotels: any[] = [];
  allHotels: any[] = []; // 🔥 original data
  loading = true;

  // 🔥 ADD THIS (your error fix)
  searchText: string = '';

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.hotelService.getAll().subscribe((res: any) => {
      this.hotels = res;
      this.allHotels = res; // store original
      this.loading = false;
    });
  }

  // 🔥 ADD THIS METHOD (your error fix)
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
}