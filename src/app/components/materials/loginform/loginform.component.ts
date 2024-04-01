import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  loginform:FormGroup;
  constructor(private fb:FormBuilder){
this.loginform=this.fb.group({
  email:['p@gmail.com',[Validators.required,Validators.min(3)]],
  password:['123',Validators.required]
})
  }
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
onSubmit(form:FormGroup){
console.log(form)
}
}
