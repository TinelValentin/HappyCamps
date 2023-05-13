import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/Models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  base_url = 'https://localhost:7027/api/Events'

  constructor(private http:HttpClient) { }

  getUpcomingEvents(){
    return this.http.get<Event[]>(this.base_url);
  }

  getEventById(id:number){
    return this.http.get<Event>(this.base_url+`/getEventById?id=${id}`)
  }

  editEvent(event:Event){
    event.description="123"
    return this.http.put<any>(this.base_url,event)
  }

  addEvent(event: Event) {
    event.description="123"
    return this.http.post<any>(this.base_url,event)
  }

  searchEvent(title:string){
    //PLS IMPLEMENT
  }
}