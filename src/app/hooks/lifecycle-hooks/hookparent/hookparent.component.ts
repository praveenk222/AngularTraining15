import { Component } from '@angular/core';

@Component({
  selector: 'app-hookparent',
  templateUrl: './hookparent.component.html',
  styleUrls: ['./hookparent.component.css']
})
export class HookparentComponent {
  isChild:boolean=false;
  name:string='Angular 15'
  constructor(){

    console.log('parent constructor')
  }
  
  ngOnInit(){
    console.log('parent OnInIt')
  }
  toggleCHild() {
  this.isChild=!this.isChild
  }
}
