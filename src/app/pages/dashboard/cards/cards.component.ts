import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
@Input() data:any;
constructor(){

}
ngOnInit(){
  console.log(this.data)

}
}
