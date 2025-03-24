import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RemoveUserComponent } from './components/remove-user/remove-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },  
  { path: 'add-user', component: AddUserComponent },
  { path: 'remove-user', component: RemoveUserComponent },
  { path: 'user-details', component: UserDetailsComponent },
  {path: 'user-details/:id', component: UserDetailsComponent}, 
];
