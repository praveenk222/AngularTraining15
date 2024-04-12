import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  inputdata!:number;
constructor(private service:NotificationService){}

  sendMessage(){debugger
    console.log('component 2 '+this.inputdata);
    this.service.sendNotification(this.inputdata)

  }
}
