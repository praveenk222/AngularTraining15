import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
data:any=[
  {'data':"Parent to Child",'route':"/emp",'message':'test tete','title':'Share data'}
]
}
