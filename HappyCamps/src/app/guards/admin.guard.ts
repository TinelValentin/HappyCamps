import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Roles } from '../Models/roles';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private auth:AuthService,private router:Router){}
  
  canActivate():boolean{
    if(this.auth.getRoleFromToken() == Roles[1])
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