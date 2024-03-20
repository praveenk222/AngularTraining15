import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: any=[];

  constructor(private userservice:UserService){
  }
ngOnInit(){
  this.getUserList();

}
  getUserList(){
    this.userservice.getUser().subscribe(res=>
      {
        this.userList=res;
        this.userList.forEach((e:any) => {
          e.date=Date.now();
        });
        console.log(res)
      })
  }
}
