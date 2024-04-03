import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-d',
  templateUrl: './structural-d.component.html',
  styleUrls: ['./structural-d.component.css']
})
export class StructuralDComponent {
  name:string="angular"
  students:any=[
    {name:'john'},
    {name:'rohan'},
    {name:'ravi'},
  ]
  colors={
'Red':'Red',
'Blue':'Blue',
'Green':'Green',
  }
  btnclr='Red'
  color:string='Red';
  constructor(){
    // this.students.length=0;
   
  }
  get(){debugger
    this.students=[
      {name:'raju'},
     
    ]
  }
}
