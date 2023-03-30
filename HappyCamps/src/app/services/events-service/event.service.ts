import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/Models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  base_url = 'https://localhost:7027/api/Events'

  constructor(private http:HttpClient) { }

  getUpcommingEvents(){
    return this.http.get<Event[]>(this.base_url);
  }
}