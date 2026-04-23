import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Auth
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

// User
import { HomeComponent } from './pages/home/home/home.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { HotelDetailsComponent } from './pages/home/hotel-details/hotel-details.component';
import { MyBookingsComponent } from './pages/booking/my-bookings/my-bookings.component';
import { CreateBookingComponent } from './pages/booking/create-booking/create-booking.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { OffersComponent } from './pages/offers/offers.component';

// Admin
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { PromotionsComponent } from './pages/admin/promotions/promotions.component';
import { EmailComponent } from './pages/admin/email/email.component';
import { HotelsComponent as AdminHotelsComponent } from './pages/admin/hotels/hotels.component';
import { RoomsComponent } from './pages/admin/rooms/rooms.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';

// Guards
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // 🔐 Auth
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // 👤 USER
  { path: 'home', component: HomeComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotels/:id', component: HotelDetailsComponent },
  // { path: 'offers', component: OffersComponent }, // ✅ CORRECT
  { path: 'bookings', component: MyBookingsComponent, canActivate: [AuthGuard] },
  { path: 'book-room', component: CreateBookingComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

  // 🛠 ADMIN
  { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
  { path: 'admin/users', component: UsersComponent, canActivate: [AdminGuard] },
  { path: 'admin/promotions', component: PromotionsComponent, canActivate: [AdminGuard] },
  { path: 'admin/email', component: EmailComponent, canActivate: [AdminGuard] },
  { path: 'admin/hotels', component: AdminHotelsComponent, canActivate: [AdminGuard] },
  { path: 'admin/rooms/:hotelId', component: RoomsComponent, canActivate: [AdminGuard] },
  { path: 'admin/bookings', component: BookingsComponent, canActivate: [AdminGuard] },

  // ❗ ALWAYS LAST
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}