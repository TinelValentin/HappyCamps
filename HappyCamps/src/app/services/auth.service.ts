import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login_url:string ='https://localhost:7027/api/User/login'
  
  private userPayload:any;

  constructor(private http:HttpClient, private router:Router) {
    this.userPayload = this.decodedToken();
  }

  login(loginObj:any){
      return this.http.post<any>(this.login_url,loginObj);
  }

  storeToken(tokenValue:string){
    localStorage.setItem('token',tokenValue);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }

  signOut(){
      localStorage.clear();
      this.router.navigate(['/login'])
  }
  
  decodedToken(){
      const jwtHelper = new JwtHelperService()
      const token = this.getToken()!;
      console.log("token:",token)
      console.log("decode token:",jwtHelper.decodeToken(token))
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
