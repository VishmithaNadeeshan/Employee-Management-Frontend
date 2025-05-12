import { Component } from '@angular/core';
import { HeaderComponent } from './common/header/header.component';
import { RouterOutlet } from '@angular/router';
;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent], // Only if <app-home> is in HTML
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}


