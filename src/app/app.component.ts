import { Component } from '@angular/core';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Employee CRUD example';

employee:any=[
  {id:1,name:'jhon',mailid:'jhon@gmail.com'},
  {id:2,name:'mark',mailid:'mark@gmail.com'},
  {id:3,name:'jacob',mailid:'jacob@gmail.com'},
]

edit(x:any){

}
delete(emp:any,i:number){

this.employee.splice(i,1)
console.log(this.employee)
}
}