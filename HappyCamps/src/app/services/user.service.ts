import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegiserUserModel } from '../Models/register-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_url = "https://localhost:7027/api"

  constructor(private http:HttpClient) {}

  registerUser(newUser:RegiserUserModel){
    return this.http.post<any>(`${this.base_url}/User/register`,newUser);
  }
}
