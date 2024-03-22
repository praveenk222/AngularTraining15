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
import { HeaderComponent } from './pages/header/header.component';
import { ParentComponent } from './pagescomunication/parent/parent.component';
import { ChildComponent } from './pagescomunication/child/child.component';
import { CardinfoComponent } from './pagescomunication/cardinfo/cardinfo.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardsComponent } from './pages/dashboard/cards/cards.component';
import { TopicdetailsComponent } from './pages/dashboard/topicdetails/topicdetails.component';
import { LifecycleHooksComponent } from './hooks/lifecycle-hooks/lifecycle-hooks.component';
import { CounterComponent } from './hooks/lifecycle-hooks/counter/counter.component';
import { HookchildComponent } from './hooks/lifecycle-hooks/hookchild/hookchild.component';
import { HookparentComponent } from './hooks/lifecycle-hooks/hookparent/hookparent.component';

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
    CardinfoComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    CardsComponent,
    TopicdetailsComponent,
    LifecycleHooksComponent,
    CounterComponent,
    HookchildComponent,
    HookparentComponent
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
