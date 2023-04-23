import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-management-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared-module/shared-module.module';
import { EditEventComponent } from './edit-event/edit-event.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AddEventComponent } from './add-event/add-event.component';
import { SelectEventComponent } from './select-event/select-event.component';


@NgModule({
  declarations: [
    MainPageComponent,
    EditEventComponent,
    AddEventComponent,
    SelectEventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
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
export class EventsModule { }
