import { Component } from '@angular/core';
import { CigTableComponent } from './cig-table/cig-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CigTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AWMS';
}
