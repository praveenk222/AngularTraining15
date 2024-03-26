import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'hook-child',
  templateUrl: './hookchild.component.html',
  styleUrls: ['./hookchild.component.css']
})
export class HookchildComponent implements OnInit,OnDestroy,OnChanges,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
  counter=0;
  interval:any;
  @Input() name:string='' 
@ContentChild('myheader') data:any;
  
  constructor(){
    console.log('child first constructor')
    console.log('only one time data will invoke');

  }

 
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ONCHANGE --->child second onchange', this.data)
  }
  
  ngOnDestroy(): void {
    console.log('calling destory')
    clearInterval(this.interval)

  }
  
  ngOnInit(){
    console.log('third ngoninit');
    console.log('ONINIT -->only one time data will invoke',this.data);
    //    this.interval=  setInterval(()=>{
    //   this.counter = this.counter + 1;
    //   console.log(this.counter)
    // },1000)
  }
  ngAfterContentInit(): void {
    console.log('After COntnent Init',this.data.nativeElement.firstChild.data)
    }
    ngAfterContentChecked(): void {
      console.log('After COntnent Checked',this.data.nativeElement.firstChild.data)
  
    }
    ngAfterViewInit(): void {
    console.log('After VIew Init',this.data.nativeElement.firstChild.data)

    }
    ngAfterViewChecked(): void {
      console.log('After View Checked',this.data.nativeElement.firstChild.data)

    }
}