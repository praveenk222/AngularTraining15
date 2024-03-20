import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
// @Input() message:string="";
@ViewChild(ChildComponent) child:any;
fromparent:string="data from parent"
title!:string;
showdata:boolean=false;
getdata(data:any){
  this.title=data.title;
  this.showdata=data.show;
}
ngAfterViewInit(){
this.title=this.child.viewchildMessage
console.log(this.title)
}
}
