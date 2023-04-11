import { Component } from '@angular/core';
import { MenuItem } from './Models/menu-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HappyCamps';

  // menuItems: MenuItem[] =
  //   [
  //     {
  //       name: "Events",
  //       path: "/events"
  //     },
  //     {
  //       name: "Achievements",
  //       path: "/achievements"
  //     },
  //     {
  //       name: "Profile",
  //       path: "/profile"
  //     }
  //   ]
}
