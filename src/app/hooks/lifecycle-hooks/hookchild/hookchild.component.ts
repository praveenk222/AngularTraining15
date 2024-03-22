import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'hook-child',
  templateUrl: './hookchild.component.html',
  styleUrls: ['./hookchild.component.css']
})
export class HookchildComponent implements OnInit,OnDestroy,OnChanges {
  counter=0;
  interval:any;
  @Input() name:string='' 
  constructor(){
    console.log('child first constructor')
    console.log('only one time data will invoke');

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('child second onchange')
  }
  
  ngOnDestroy(): void {
    console.log('calling destory')
    clearInterval(this.interval)

  }
  
  ngOnInit(){
    console.log('third ngoninit');
    console.log('only one time data will invoke');
    //    this.interval=  setInterval(()=>{
    //   this.counter = this.counter + 1;
    //   console.log(this.counter)
    // },1000)
  }
  
}