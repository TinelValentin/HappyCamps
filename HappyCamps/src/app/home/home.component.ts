import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../Models/event';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/events-service/event.service';
import { UserStoreService } from '../services/user-store.service';
import { User } from '../Models/user';
import { Roles } from '../Models/roles';
import { MenuItem } from '../Models/menu-item.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public fullName: string = "";
  public role: string = "";
  isCollapsed = false;

  public upcomingEvents: Event[] = []
    
  constructor(private auth:AuthService, private userStore:UserStoreService, private eventService:EventService,private router:Router){}

  menuItems: MenuItem[] =
    [
      {
        name: "Events",
        path: "/events"
      },
      {
        name: "Achievements",
        path: "/achievements"
      },
      {
        name: "Profile",
        path: "/profile"
      }
    ]

  ngOnInit() {
    this.userStore.getFullNameFromStore().subscribe(
      val=>{
        let fullNameFromToken = this.auth.getFullNameFromToken()
        this.fullName = val || fullNameFromToken
      }
    )

    this.userStore.getRoleFromStore().subscribe(
      val=>{
        let roleFromToken = this.auth.getRoleFromToken()
        this.role = val || roleFromToken
      } 
    )
  }

  logout(){
    this.auth.signOut();
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  OpenUpCommingEventsPage() {
    debugger;
    this.router.navigate(['events'])
  }
}