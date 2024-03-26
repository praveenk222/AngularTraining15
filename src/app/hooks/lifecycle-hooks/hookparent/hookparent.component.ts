import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hookparent',
  templateUrl: './hookparent.component.html',
  styleUrls: ['./hookparent.component.css']
})
export class HookparentComponent implements OnInit,DoCheck,OnChanges {
  isChild:boolean=false;
  name:string='Angular 15'
  constructor(){

    console.log('parent constructor')
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('onchange')
  }
  
  ngDoCheck(): void {
    console.log('parent DoCheck')
      
  }
  ngOnInit(){
    console.log('parent OnInIt')
  }
  toggleCHild() {
  this.isChild=!this.isChild
  }
}
