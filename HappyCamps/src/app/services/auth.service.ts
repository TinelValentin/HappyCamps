import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login_url:string ='https://localhost:7027/api/User/login'
  constructor(private http:HttpClient) {

   }

   signUp(){

   }

   login(loginObj:any){
      return this.http.post<any>(this.login_url,loginObj)
   }
}
