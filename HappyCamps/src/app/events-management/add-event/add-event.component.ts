import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { EventService } from 'src/app/services/events-service/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {
  addEventForm!: FormGroup;

  user_email :string
  constructor(private fb:FormBuilder,private eventService:EventService,private auth:AuthService){}

  ngOnInit(){
    this.initializeForm()
  }

  private initializeForm(){
    this.user_email = this.auth.getEmailFromToken()
    this.addEventForm= this.fb.group({
      startDate:[null,[Validators.required]],
      endDate:[null,[Validators.required]],
      location:[null,[Validators.required]],
      name:[null,[Validators.required]],
      organizer:[this.auth.getEmailFromToken(),[Validators.required]],
      points:[null,[Validators.required,]]
    })
  }

  submitForm(){

    if(this.addEventForm.valid){
      this.eventService.addEvent(this.addEventForm.value).subscribe({
        next:(res)=>{
          alert(res.message)
        }
      })
    }
  }

  get name(){
    return this.addEventForm.get("name")
  }
  get startDate() {
    return this.addEventForm.get('startDate');
  }
  
  get endDate() {
    return this.addEventForm.get('endDate');
  }
  
  get location() {
    return this.addEventForm.get('location');
  }
  
  get organizer() {
    return this.addEventForm.get('organizer');
  }
  
  get points() {
    return this.addEventForm.get('points');
  }
}
