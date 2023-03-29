import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  base_url = 'https://localhost:7027/api/Events'

  constructor(private http:HttpClient) { }

  getUpcommingEvents(){
    return this.http.get(this.base_url);
  }
}