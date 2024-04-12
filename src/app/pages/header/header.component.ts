import { Component } from '@angular/core';
import { NotificationService } from 'src/app/Demo/Demo18/structural-d/Demo20/rxjs/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
count!:number;

constructor(private service:NotificationService){

}

ngOnInit(){
this.getnotificationmessage();
}
getnotificationmessage(){debugger
  this.service.notificationSubject.subscribe(
    d=>{
      this.count=d;
      console.log('component 1'+d)
    }
  )
}

}
