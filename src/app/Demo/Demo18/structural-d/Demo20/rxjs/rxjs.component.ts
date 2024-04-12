import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  notificationmessage!:number;
constructor(private service:NotificationService){

}

ngOnInit(){
  //subject 
  this.rxjexample();
this.getnotificationmessage();
}
getnotificationmessage(){debugger
  this.service.notificationSubject.subscribe(
    d=>{
      this.notificationmessage=d;
      console.log('component 1'+d)
    }
  )
}

  private rxjexample() {
    const subject = new Subject();
    subject.subscribe(d => console.log('subscribe 1 ' + d));
    subject.subscribe(d => console.log('subscribe 2 ' + d));
    subject.next(2024);
    subject.subscribe(d => console.log('subscribe 3 ' + d)); //retuned nothing



    //behavior subject
    const bsubject = new BehaviorSubject<number>(12);
    bsubject.subscribe(d => console.log('behavior subject subscribe 1 -->' + d));
    bsubject.next(2000);
    bsubject.subscribe(d => console.log('behavior subject subscribe 2 ', +d)); //working fine


    //Replay subject
    const $rsubject = new ReplaySubject(2);
    $rsubject.next('Hello..');
    $rsubject.next('How are you?');
    $rsubject.next('i am an employee');
    $rsubject.next('working at x company');
    $rsubject.subscribe(msg => console.log('user1 :' + msg));
    $rsubject.next('I have changed my address');
    $rsubject.next('to x place');
    $rsubject.subscribe(msg => console.log('user2 :' + msg));
  }
}
