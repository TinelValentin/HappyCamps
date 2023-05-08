import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Roles } from '../Models/roles';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizerGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){}
  
  canActivate():boolean{
    if(this.auth.getRoleFromToken() == Roles.ORGANIZER)
    {
      return true;
    }
    else
    {
      alert("Ups, you do not have persmissions to perfon this action")
      this.router.navigate(['/home'])
      return false;
    }
  }
}
