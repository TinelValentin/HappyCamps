import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path:'',component:MainPageComponent,canActivate:[AuthGuard]},
  {path:'edit-event/:id',component:EditEventComponent,canActivate:[AuthGuard]},
  {path:'add-event',component:AddEventComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
