import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmplistComponent } from './emplist/emplist.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './pagescomunication/parent/parent.component';
import { ChildComponent } from './pagescomunication/child/child.component';
import { CardinfoComponent } from './pagescomunication/cardinfo/cardinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    MainpageComponent,
    EmpdetailsComponent,
    EmplistComponent,
    UsersComponent,
    HeaderComponent,
    ParentComponent,
    ChildComponent,
    CardinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
