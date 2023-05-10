import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/Models/menu-item.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  menuItems: MenuItem[] =
  [
    {
      name: "Home",
      path: "/home"
    },
    {
      name: "Achievements",
      path: "/achievements"
    },
    {
      name: "Profile",
      path: "/profile"
    },
    {
      name: "Events",
      path: "/events"
    },
    {
      name: "User Management",
      path: "/user-management"
    }
  ]
  constructor() { }

  getMenuItems(){
    return this.menuItems;
  }
}
