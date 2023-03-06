import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private getAllUrl = 'https://localhost:7027/GetAll'

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<any>(this.getAllUrl)  
  }
}
