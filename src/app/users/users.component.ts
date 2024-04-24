import { Component } from '@angular/core';
import { DashcontComponent } from '../dashcont/dashcont.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [DashcontComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}
