import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { AuthGuard } from '../guards/auth.guard';
import { OrganizerGuard } from '../guards/organizer.guard';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path:'',component:MainPageComponent,canActivate:[AuthGuard]},
  {path:'edit-event/:id',component:EditEventComponent,canActivate:[AuthGuard,OrganizerGuard,AdminGuard]},
  {path:'add-event',component:AddEventComponent,canActivate:[AuthGuard,OrganizerGuard,AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
