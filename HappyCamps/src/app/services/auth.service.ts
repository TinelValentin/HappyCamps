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
  
  // private userPayload:any;
  token:string;
  constructor(private http:HttpClient, private router:Router,private cookieService:CookieService) {
    // this.userPayload = this.decodedToken();
  }

  login(loginObj:LoginUser){
    return this.http.post<any>(this.login_url,loginObj);
  }

  storeTokenInMemory(tokenValue:string){
    debugger
    this.token=tokenValue
  }

  storeTokenAndRememberMe(tokenValue:string,remember_me:string){
    this.cookieService.set("jwtToken",tokenValue)
    this.cookieService.set("remember",remember_me)
  }

  getToken(){
    debugger
    let jwtToken = this.cookieService.get('jwtToken');

    if(jwtToken==null||jwtToken==undefined || jwtToken=="")
    {
      return this.token
    }

    return jwtToken;
  }

  isLoggedIn():boolean{
    let jwtToken = this.getToken();
    return !!jwtToken;
  }

  signOut(){
    this.cookieService.delete('jwtToken');
    this.removeRememberMe();
    this.router.navigate(['/login'])
  }

  removeRememberMe(){
    this.cookieService.delete('remember');
  }

  getRememberMe(){
    return this.cookieService.get("remember")
  }
  
  decodedToken(){
      const jwtHelper = new JwtHelperService();
      const token = this.getToken()!;
      return jwtHelper.decodeToken(token);
  }
  
  getFullNameFromToken(){
   let userPayload = this.decodedToken()
    if(userPayload){
      return userPayload.name;
    }
  }

  getRoleFromToken(){
    let userPayload = this.decodedToken()
    if(userPayload){
      return userPayload.role;
    }
  }

  getEmailFromToken(){
    let userPayload = this.decodedToken()
    if(userPayload){
      return userPayload.email;
    }
  }
}