import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashcontComponent } from './dashcont/dashcont.component';
import { RomupdateComponent } from './romupdate/romupdate.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UsersComponent } from './users/users.component';
import { PasswordComponent } from './password/password.component';


export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component:HomeComponent , pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'update-room', component: RomupdateComponent },
    { path: 'bookings', component: BookingsComponent },
    { path: 'users', component: UsersComponent},
    { path: 'passwordchange', component: PasswordComponent}];
