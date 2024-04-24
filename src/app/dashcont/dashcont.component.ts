import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashcont',
  standalone: true,
  imports: [DashboardComponent,RouterOutlet],
  templateUrl: './dashcont.component.html',
  styleUrl: './dashcont.component.css'
})
export class DashcontComponent {

}
