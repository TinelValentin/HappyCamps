import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UsersComponent } from './users/users.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared-module/shared-module.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SelectUserComponent } from './select-user/select-user.component';


@NgModule({
    declarations: [
        UsersComponent,
        SelectUserComponent
    ],
    imports: [
        CommonModule,
        UserManagementRoutingModule,
        SharedModule,
        CommonModule,
        NzTableModule,
        SharedModule,
        NzIconModule,
        FormsModule,
        ReactiveFormsModule,
        NzInputModule,
        NzFormModule,
        NzModalModule
    ]
})
export class UserManagementModule { }
