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
  
  constructor(private http:HttpClient, private router:Router,private cookieService:CookieService) { }

  login(loginObj:LoginUser){
    return this.http.post<any>(this.login_url,loginObj);
  }
  
  storeTokenInSession(tokenValue:string){
    sessionStorage.setItem('jwtToken', tokenValue);
  }

  storeToken(tokenValue:string){
    this.cookieService.set("jwtToken",tokenValue)
  }

  getToken(){
    
    let jwtToken = this.cookieService.get('jwtToken') || sessionStorage.getItem("jwtToken");

    return jwtToken;
  }

  isLoggedIn():boolean{
    let jwtToken = this.getToken();
    return !!jwtToken;
  }

  signOut(){
    this.cookieService.delete('jwtToken');
    sessionStorage.removeItem("jwtToken")
    this.router.navigate(['/login'])
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