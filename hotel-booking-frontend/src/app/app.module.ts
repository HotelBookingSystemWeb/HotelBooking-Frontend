import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AuthInterceptor } from './core/interceptor/auth.interceptor';

// Shared
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HotelCardComponent } from './shared/hotel-card/hotel-card.component';
import { RoomCardComponent } from './shared/room-card/room-card.component';
import { BookingCardComponent } from './shared/booking-card/booking-card.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { EmptyComponent } from './shared/empty/empty.component';
import { StatusBadgeComponent } from './shared/status-badge/status-badge.component';

// User Pages
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { HomeComponent } from './pages/home/home/home.component';
import { HotelDetailsComponent } from './pages/home/hotel-details/hotel-details.component';
import { MyBookingsComponent } from './pages/booking/my-bookings/my-bookings.component';
import { CreateBookingComponent } from './pages/booking/create-booking/create-booking.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';

// ✅ USER Hotels
import { HotelsComponent as UserHotelsComponent } from './pages/hotels/hotels.component';

// Admin Pages
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { PromotionsComponent } from './pages/admin/promotions/promotions.component';
import { EmailComponent } from './pages/admin/email/email.component';
import { HotelsComponent as AdminHotelsComponent } from './pages/admin/hotels/hotels.component';
import { RoomsComponent } from './pages/admin/rooms/rooms.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { OffersComponent } from './pages/offers/offers.component';

@NgModule({
  declarations: [
    AppComponent,

    // Shared
    NavbarComponent,
    HotelCardComponent,
    RoomCardComponent,
    BookingCardComponent,
    LoaderComponent,
    EmptyComponent,
    StatusBadgeComponent,

    // User Pages
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HotelDetailsComponent,
    MyBookingsComponent,
    CreateBookingComponent,
    ProfileComponent,
    UserHotelsComponent,

    // Admin Pages
    DashboardComponent,
    UsersComponent,
    PromotionsComponent,
    EmailComponent,
    AdminHotelsComponent,
    RoomsComponent,
    BookingsComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}