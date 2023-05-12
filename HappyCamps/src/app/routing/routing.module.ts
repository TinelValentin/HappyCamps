import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';
import { AuthGuard } from '../guards/auth.guard';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterFormComponent } from '../register-form/register-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'events', loadChildren: () => import('../events-management/events.module').then(m => m.EventsModule),canActivate:[AuthGuard]},
  { path: 'user-management', loadChildren: () => import('../user-management/user-management.module').then(m => m.UserManagementModule),canActivate:[AuthGuard,AdminGuard]},
  { path: 'profile', loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule),canActivate:[AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
