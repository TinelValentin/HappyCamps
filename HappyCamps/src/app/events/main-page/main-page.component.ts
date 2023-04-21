import { Component } from '@angular/core';
import { EventService } from 'src/app/services/events-service/event.service';
import { Event } from '../../Models/event';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { User } from 'src/app/Models/user';
import { Roles } from 'src/app/Models/roles';
import { MenuItem } from 'src/app/Models/menu-item.interface';
import { NavigationExtras, Router } from '@angular/router';
import { EditEventComponent } from '../edit-event/edit-event.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddEventComponent } from '../add-event/add-event.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  total = 1;
  loading = true;
  pageSize = 10;
  pageIndex = 1;

  public upcomingEvents: Event[] = [];

  menuItems: MenuItem[] =
    [
      {
        name: "Home",
        path: "/home"
      },
      {
        name: "Achievements",
        path: "/achievements"
      },
      {
        name: "Profile",
        path: "/profile"
      }
    ]

  constructor(private eventsService: EventService, private modal: NzModalService) { }

  ngOnInit() {
    this.fetchDataFromServer()
  }

  fetchDataFromServer(): void {
    this.loading = true
    this.eventsService.getUpcomingEvents().subscribe({
      next: (events) => {
        this.loading = false
        this.upcomingEvents = events
      }
    })
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort } = params;
    const currentSort = sort.find(item => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    this.upcomingEvents.sort(() => {
      let comparison = 0
      switch (sortField) {
        case 'name':
          comparison = sortOrder == 'ascend' ? 1 : -1
          break
        case 'points':
          comparison = sortOrder == 'ascend' ? 1 : -1
          break
        case 'location':
          comparison = sortOrder == 'ascend' ? 1 : -1
          break
        case 'start date':
          comparison = sortOrder == 'ascend' ? 1 : -1
          break
        case 'end date':
          comparison = sortOrder == 'ascend' ? 1 : -1
          break;
      }
      return comparison;
    })
  }

  selectEvent() {

  }

  addNewEvent() {
    this.modal.create({
      nzTitle:"Add-event",
      nzContent:AddEventComponent,
      nzFooter:null
    })
  }

  editEvent(event: Event) {
    this.modal.create({
      nzTitle: "edit-event",
      nzContent: EditEventComponent,
      nzFooter: null,
      nzComponentParams: {
        eventToEdit: event
      }
    })
  }
}