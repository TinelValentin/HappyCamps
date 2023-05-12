import { Component, Input } from '@angular/core';
import { Event } from '../../Models/event';

@Component({
  selector: 'app-select-event',
  templateUrl: './select-event.component.html',
  styleUrls: ['./select-event.component.scss']
})
export class SelectEventComponent {

  @Input() selectedEvent?: Event;

  participate()
  {
    //TODO: Implement participation for an event
  }
}
