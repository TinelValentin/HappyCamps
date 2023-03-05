import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private auth:AuthService,
              private api:ApiService){}

   ngOnInit(){
    this.api.getUsers()
    .subscribe(res=>{
      console.log(res)
    })
   } 
  
  logout(){
    this.auth.signOut();
  }
}
