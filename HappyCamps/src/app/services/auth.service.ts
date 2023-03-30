import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'
import { CookieService } from 'ngx-cookie-service';
import { LoginUser } from '../Models/login-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login_url:string ='https://localhost:7027/api/User/login'
  
  private userPayload:any;

  constructor(private http:HttpClient, private router:Router,private cookieService:CookieService) {
    this.userPayload = this.decodedToken();
  }

  login(loginObj:LoginUser){
    return this.http.post<any>(this.login_url,loginObj);
  }

  storeToken(tokenValue:string){
    this.cookieService.set("jwtToken",tokenValue)
  }

  getToken(){
    let jwtToken = this.cookieService.get('jwtToken');
    return jwtToken;
  }

  isLoggedIn():boolean{
    let jwtToken = this.cookieService.get('jwtToken');
    return !!jwtToken;
  }

  signOut(){
    this.cookieService.delete('jwtToken');
    this.router.navigate(['/login'])
  }
  
  decodedToken(){
      const jwtHelper = new JwtHelperService();
      const token = this.getToken()!;
      return jwtHelper.decodeToken(token);
  }
  
  getFullNameFromToken(){
    if(this.userPayload){
      return this.userPayload.name;
    }
  }

  getRoleFromToken(){
    if(this.userPayload){
      return this.userPayload.role;
    }
  }
}