import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsRoutingModule } from './events-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    NzTableModule,
    SharedModule
  ]
})
export class EventsModule { }
