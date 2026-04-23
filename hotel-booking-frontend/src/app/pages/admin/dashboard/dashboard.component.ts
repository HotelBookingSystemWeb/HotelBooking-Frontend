import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stats: any = {
    users: 0,
    bookings: 0,
    hotels: 0,
    revenue: 0
  };

  // 🔥 NEW
  recentBookings: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadStats();
    this.loadRecent(); // 🔥 ADD
  }

  loadStats() {
    this.http.get('https://localhost:7168/api/Admin/dashboard')
      .subscribe((res: any) => {
        this.stats = res;
      });
  }

  // 🔥 NEW
  loadRecent() {
    this.http.get('https://localhost:7168/api/Admin/recent-bookings')
      .subscribe((res: any) => {
        this.recentBookings = res;
      });
  }
}