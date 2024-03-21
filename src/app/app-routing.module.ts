import { ParentComponent } from './pagescomunication/parent/parent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmplistComponent } from './emplist/emplist.component';
import { UsersComponent } from './users/users.component';
import { CardinfoComponent } from './pagescomunication/cardinfo/cardinfo.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'emp', component: EmplistComponent ,pathMatch: 'full'} ,
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'empdetails/:id', component: EmpdetailsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'parentc', component: ParentComponent },
  { path: 'card', component: CardinfoComponent },
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }