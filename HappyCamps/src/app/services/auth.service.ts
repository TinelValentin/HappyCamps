import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login_url:string ='https://localhost:7027/api/User/login'
  
  constructor(private http:HttpClient, private router:Router) {}

  signUp(){

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
}
