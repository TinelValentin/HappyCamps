import { Component } from '@angular/core';
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
  mockUser: User = {
    id: 1,
    firstName: "Tinel",
    lastName: "Tinel",
    email: "Tinel@yahoo.com",
    password: " ",
    birthDate: new Date(),
    phoneNumber: "0763214123",
    city: "Brasov",
    instagram: "@Mor",
    roleType: Roles.VOLUNTEER,
    points: 10000,
    accepted: true,
    isActive: true,
    isAspirant: false
  }

  public upcomingEvents: Event[] = [
    {
      id: 1,
      name: "Eco",
      description: "test",
      points: 100,
      location: "Brasov",
      startDate: new Date(),
      endDate: new Date(),
      organizer: this.mockUser
    },
    {
      id: 2,
      name: "test",
      description: "test",
      points: 100,
      location: "Brasov",
      startDate: new Date(),
      endDate: new Date(),
      organizer: this.mockUser
    },
    {
      id: 3,
      name: "test",
      description: "test",
      points: 100,
      location: "Brasov",
      startDate: new Date(),
      endDate: new Date(),
      organizer: this.mockUser
    }
  ];

  menuItems: MenuItem[] =
    [
      {
        name: "Events",
        path: ""
      },
      {
        name: "Achievements",
        path: ""
      },
      {
        name: "Profile",
        path: ""
      }
    ]
  constructor(private auth: AuthService, private api: ApiService, private userStore: UserStoreService, private eventService: EventService) { }

  ngOnInit() {
    // this.userStore.getFullNameFromStore().subscribe(
    //   val=>{
    //     let fullNameFromToken = this.auth.getFullNameFromToken()
    //     this.fullName = val || fullNameFromToken
    //   }
    //)

    // this.userStore.getRoleFromStore().subscribe(
    //   val=>{
    //     let roleFromToken = this.auth.getRoleFromToken()
    //     this.role = val || roleFromToken
    //   } 
    // )
    this.eventService.getUpcomingEvents().subscribe({
      next: (events) => {
        this.upcomingEvents = events
      }
    })
  }

  logout() {
    this.auth.signOut();
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}