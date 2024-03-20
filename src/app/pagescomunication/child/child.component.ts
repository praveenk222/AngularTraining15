import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { HttpdataService } from 'src/app/services/httpdata.service';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
message:string="Hello "
@Output() data=new EventEmitter();
@Input() childmessage:any;
  employee: any;
  viewchildMessage:string="using viewchild";
constructor(private dataservice:HttpdataService){
  this.getAllTodos();
  }
    
  getAllTodos(){
    this.dataservice.getAllTodos().subscribe((res:any)=>{
      this.employee=res[0].title
      console.log(res[0].title)
    })
  }
sendata(){
  var data={
    'show':true,
    'title':this.employee
  }
  this.data.emit(data);

}
}
