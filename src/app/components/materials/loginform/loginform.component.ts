import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
[x: string]: any;
login(form:NgForm){
  if(form.valid){
    alert(form.valid)
    //call api
  }else{
    alert('Please enter mailid and password')
  }
console.log(form)
}
}
