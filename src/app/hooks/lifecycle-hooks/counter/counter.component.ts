import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count: number = 0;
  private countingSubscription: Subscription | undefined;
constructor(){}
  startCounting() {
    // Simulate counting using an observable
    const source = new Observable<number>((observer:any) => {
      let value = 0;
      const interval = setInterval(() => {
        observer.next(value);
        value++;
      }, 1000);

      // Cleanup when unsubscribed
      return () => {
        clearInterval(interval);
      };
    });

    this.countingSubscription = source.subscribe((value:any) => {
      this.count = value;
    });
  }

  stopCounting() {
    // Unsubscribe to prevent memory leaks
    if (this.countingSubscription) {
      this.countingSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    // Ensure proper cleanup when the component is destroyed
    this.stopCounting();
  }
  ngOnInit(){
    console.log('oninit')
  }
  ngOnDestory(){
    console.log('ondestroy')
  }

  private logit(msg:string){
    console.log()
  }
}