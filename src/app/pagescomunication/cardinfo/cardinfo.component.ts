import { Component } from '@angular/core';

@Component({
  selector: 'app-cardinfo',
  templateUrl: './cardinfo.component.html',
  styleUrls: ['./cardinfo.component.css']
})
export class CardinfoComponent {
data:any=[
  {"title":"Sharing Data","type":"View child","name":"parent to child","route":"/parentc"},
  {"title":"Sharing Data","type":"p2c","name":"how to share data from parent to child"},
  {"title":"Sharing Data","type":"c2p","name":"how to share data from child to parent"},
]
}
