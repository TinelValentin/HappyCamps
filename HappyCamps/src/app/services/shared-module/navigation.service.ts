import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/Models/menu-item.interface';
import { Roles } from 'src/app/Models/roles';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  menuItems: MenuItem[] =
  [
    {
      name: "Home",
      path: "/home",
      display:true
    },
    {
      name: "Achievements",
      path: "/achievements",
      display:true
    },
    {
      name: "Profile",
      path: "/profile",
      display:true
    },
    {
      name: "Events",
      path: "/events",
      display:true
    },
    {
      name: "User Management",
      path: "/user-management",
      display:false
    }
  ]
  constructor(private auth:AuthService) { }

  getMenuItems(){
    this.menuItems.forEach((x)=>{
      if(this.auth.getRoleFromToken()==Roles.ADMIN){
        x.display=true
      }
    })
    return this.menuItems;
  }
}
