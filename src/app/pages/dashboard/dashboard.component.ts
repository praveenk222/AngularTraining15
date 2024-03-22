import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  parentdata:any=[
  {'data':"Life Cycles",'route':"/emp",'message':'test tete','title':'Share data','img':'assets/img/card.jpg'},
]
}
