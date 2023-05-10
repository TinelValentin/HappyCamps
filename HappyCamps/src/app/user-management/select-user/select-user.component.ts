import { Component, Input } from '@angular/core';
import { Roles } from 'src/app/Models/roles';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.scss']
})
export class SelectUserComponent {
  @Input() selectedUser?: User
  
}
