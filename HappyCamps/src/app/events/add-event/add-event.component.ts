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
  editEventForm!: FormGroup;

  user_email :string
  constructor(private fb:FormBuilder,private eventService:EventService,private auth:AuthService){}

  ngOnInit(){
    this.initializeForm()
  }

  private initializeForm(){
    this.user_email = this.auth.getEmailFromToken()
    this.editEventForm= this.fb.group({
      startDate:["",[Validators.required]],
      endDate:['',[Validators.required]],
      location:['',[Validators.required]],
      name:['',[Validators.required]],
      organizer:[this.auth.getEmailFromToken(),[Validators.required]],
      points:['',[Validators.required,]]
    })
  }

  submitForm(){
    debugger
    if(this.editEventForm.valid){
      console.log(this.editEventForm.value)
      this.eventService.add_event(this.editEventForm.value).subscribe({
        next:(res)=>{
          alert(res.message)
        }
      })
    }
  }

  get name(){
    return this.editEventForm.get("name")
  }
  get startDate() {
    return this.editEventForm.get('startDate');
  }
  
  get endDate() {
    return this.editEventForm.get('endDate');
  }
  
  get location() {
    return this.editEventForm.get('location');
  }
  
  get organizer() {
    return this.editEventForm.get('organizer');
  }
  
  get points() {
    return this.editEventForm.get('points');
  }
}
