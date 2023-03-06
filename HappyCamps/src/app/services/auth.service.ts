import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'
import { LoginUser } from '../Models/login-user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login_url:string ='https://localhost:7027/api/User/login'
  
  private userPayload:any;

  private token:string="";

  constructor(private http:HttpClient, private router:Router) {
    this.userPayload = this.decodedToken();
  }

  login(loginObj:LoginUser){
    return this.http.post<any>(this.login_url,loginObj);
  }

  storeToken(tokenValue:string){
    this.token=tokenValue;
  }

  getToken(){
    return this.token;
  }

  isLoggedIn():boolean{
    return !!this.token
  }

  signOut(){
      this.token="";
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
