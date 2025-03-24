import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { RemoveUserComponent } from './components/remove-user/remove-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },  
  { path: 'add-user', component: AddUserComponent },
  { path: 'remove-user', component: RemoveUserComponent },
  { path: 'user-details', component: UserDetailsComponent },  
  { path: 'user-details/:id', component: UserDetailsComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
console.log("Routes:", routes);
