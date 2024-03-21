import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  parentdata:any=[
  {'data':"Parent to Child",'route':"/emp",'message':'test tete','title':'Share data','img':'assets/img/card.jpg'},
  {'data':"View Child",'route':"/emp",'message':'using child component after ngview init','title':'Share data','img':'assets/img/card.jpg'},
]
}
