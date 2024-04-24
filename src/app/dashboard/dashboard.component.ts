import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashcontComponent } from '../dashcont/dashcont.component';
import { RomupdateComponent } from '../romupdate/romupdate.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,DashcontComponent,RomupdateComponent,ContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
