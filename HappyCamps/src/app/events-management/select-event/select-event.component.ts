import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserEventService } from 'src/app/services/user-events-service/user-event.service';
import { Event } from '../../Models/event';

@Component({
  selector: 'app-select-event',
  templateUrl: './select-event.component.html',
  styleUrls: ['./select-event.component.scss']
})
export class SelectEventComponent {

  @Input() selectedEvent?: Event;

  constructor(private auth:AuthService,private userEventService:UserEventService){}
  
  participate()
  {
    this.userEventService.JoinUserToEvent(this.auth.getEmailFromToken(),this.selectedEvent?.id).subscribe({
      next:(res)=>{
        console.log(res);
        alert(res.message)
      }
    })
  }
}
