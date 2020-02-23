import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() numType;
  element: any;
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'red';
    this.element = element;
   }
   ngOnInit(): void {
    console.log("numType :", this.numType);
    if (this.numType === 'odd') {
      this.element.nativeElement.style.backgroundColor = 'yellow';
    } else if (this.numType === 'even') {
      this.element.nativeElement.style.backgroundColor = 'green';
    } else if (this.numType === 'str') {
      this.element.nativeElement.style.backgroundColor = 'orange';
    }
   }

}
