import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/events-service/event.service';
import { UserStoreService } from '../services/user-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public fullName:string="";
  public role:string="";
  isCollapsed = false;
  public upcommingEvents:any=[];

  constructor(private auth:AuthService,private api:ApiService,private userStore:UserStoreService,private eventService:EventService){}

  ngOnInit(){
    this.api.getUsers()
      .subscribe(res=>{
        console.log(res)
    })

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

    this.eventService.getUpcommingEvents().subscribe({
      next:(res)=>{
        this.upcommingEvents=res
        console.log(this.upcommingEvents)
      }
    })
  } 
  
  logout(){
    this.auth.signOut();
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}