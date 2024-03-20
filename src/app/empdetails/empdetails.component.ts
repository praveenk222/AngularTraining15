import { Component } from '@angular/core';
import { HttpdataService } from '../services/httpdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent {
tododetails: any={};
id:any=0;
constructor(private dataservice:HttpdataService,private route:ActivatedRoute){
  this.id=this.route.snapshot.paramMap.get('id') ;
this.getTododetailsByID();
}
getTododetailsByID(){
  this.dataservice.getTodosById(this.id).subscribe(x=>{
console.log('tododetails',x)
this.tododetails=x;
  })
}
}
