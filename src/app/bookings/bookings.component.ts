import { Component } from '@angular/core';
import { DashcontComponent } from '../dashcont/dashcont.component';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [DashcontComponent],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {

}
