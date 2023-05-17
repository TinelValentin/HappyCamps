import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzTableSortOrder, NzTableSortFn, NzTableFilterList, NzTableFilterFn, NzTableQueryParams } from 'ng-zorro-antd/table';
import { SelectEventComponent } from 'src/app/events-management/select-event/select-event.component';
import { MenuItem } from 'src/app/Models/menu-item.interface';
import { Roles } from 'src/app/Models/roles';
import { User } from 'src/app/Models/user';
import { AuthService } from 'src/app/services/auth.service';
import { NavigationService } from 'src/app/services/shared-module/navigation.service';
import { UserService } from 'src/app/services/user.service';
import { SelectUserComponent } from '../select-user/select-user.component';

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<User> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<User> | null;
  filterMultiple: boolean;
  sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {


  listOfUsers: User[] = []

  total = 1;
  loading = true;
  pageSize = 10;
  pageIndex = 1;
  searchText:string;
  isAdmin=false

  menuItems: MenuItem[] = []

  constructor(private auth:AuthService,private userService: UserService, private navigationService: NavigationService,private modal: NzModalService) { }

  ngOnInit() {
    this.menuItems = this.navigationService.getMenuItems()
    this.fetchDataFromServer()
  }

  private fetchDataFromServer() {
    this.isAdmin = this.auth.getRoleFromToken() == Roles.ADMIN ? true : false
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.listOfUsers = res
      }
    })
  }

  selectUser(user: User) {
    this.modal.create({
      nzTitle: `${user.firstName} ${user.lastName}`,
      nzContent: SelectUserComponent,
      nzFooter: null,
      nzComponentParams: { selectedUser: user },
      nzWidth:1000
    })
  }

  onQueryParamsChange(params: NzTableQueryParams): void {}

  search(searchText:String){

  }

  editUser(user:User){
    
  }

  toggleIsAspirant(user: User) {
    user.isAspirant = !user.isAspirant
  }

  toggleIsActive(user: User) {
    user.isActive = !user.isActive
  }
  
  toggleAccepted(user: User) {
    user.accepted = !user.accepted
  }
}
