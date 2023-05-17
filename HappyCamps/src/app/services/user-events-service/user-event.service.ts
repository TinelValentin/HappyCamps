import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserEventService {

  private base_url = "https://localhost:7027/api/UserEvent"
  //https://localhost:7027/api/UserEvent?userEmail=volunteer%40yahoo.com&eventId=1

  constructor(private http:HttpClient) { }

  JoinUserToEvent(userEmail:string,eventId:number|undefined){
    return this.http.post<any>(`${this.base_url}?userEmail=${userEmail}&eventId=${eventId}`,null);
  }
}
