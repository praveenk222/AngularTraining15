import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
// public notificationSubject=new Subject<number>();
public notificationSubject=new BehaviorSubject<number>(0);
  constructor() { }

  sendNotification(data:number){
    this.notificationSubject.next(data);
  }
}
