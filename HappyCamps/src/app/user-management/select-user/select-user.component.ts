import { Component, Input } from '@angular/core';
import { Roles } from 'src/app/Models/roles';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss']
})
export class SelectUserComponent {
  @Input() selectedUser?: User;

  role:string

  ngOnInit(){

    if(this.selectedUser?.roleType==0)
    {
      this.role='voluntar'
    }
    if(this.selectedUser?.roleType==1)
    {
      this.role='admin'
    }
    if(this.selectedUser?.roleType==2)
    {
      this.role='organizer'
    }
  }
}
