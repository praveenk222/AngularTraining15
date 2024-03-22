import { Component } from '@angular/core';
import { HttpdataService } from '../services/httpdata.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {
  title = 'Angular Employee CRUD example';
  employee:any=[]
constructor(private dataservice:HttpdataService){
this.getAllTodos();
}
  
getAllTodos(){
  this.employee= this.dataservice.getAllTodos().subscribe(x=>{
    console.log(x)
    this.employee=x;
  })
}
  edit(x:any){
  
  }
  delete(emp:any,i:number){
  
  this.employee.splice(i,1)
  console.log(this.employee)
  }
  
  }