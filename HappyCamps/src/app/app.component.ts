import { Component, HostListener } from '@angular/core';
import { MenuItem } from './Models/menu-item.interface';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HappyCamps';

  constructor(private auth:AuthService){}
}
