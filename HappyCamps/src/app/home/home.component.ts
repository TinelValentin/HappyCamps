import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../Models/event';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/events-service/event.service';
import { UserStoreService } from '../services/user-store.service';
import { MenuItem } from '../Models/menu-item.interface';
import { NavigationService } from '../services/shared-module/navigation.service';

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
    
  constructor(private auth:AuthService, private userStore:UserStoreService, private eventService:EventService,private router:Router,private navigationService:NavigationService){}

  menuItems: MenuItem[] = []
  
  ngOnInit() {
    this.menuItems = this.navigationService.getMenuItems()
    
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
    this.router.navigate(['events'])
  }
}