import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashcontComponent } from '../dashcont/dashcont.component';

@Component({
  selector: 'app-romupdate',
  standalone: true,
  imports: [DashboardComponent,DashcontComponent],
  templateUrl: './romupdate.component.html',
  styleUrl: './romupdate.component.css'
})
export class RomupdateComponent {

}
