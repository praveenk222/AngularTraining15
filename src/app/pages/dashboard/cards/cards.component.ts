import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'Cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit,OnChanges {
@Input() data:any;
parentdata:any=[
  {'route':"/lifecycle",'title':'Life - Cycle '},
]
constructor(){
console.log(this.parentdata)
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data)
  }

ngOnInit(){
  console.log(this.data)

}
}
