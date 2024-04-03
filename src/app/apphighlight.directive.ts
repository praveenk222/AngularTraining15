import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appApphighlight]'
})
export class ApphighlightDirective {

  constructor(private eleref:ElementRef) {

    this.eleref.nativeElement.style.color='#f1091f'
   }

}
