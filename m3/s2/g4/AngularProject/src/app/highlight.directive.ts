import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ref:ElementRef) { }

  ngOnInit(){
    this.ref.nativeElement.style.backgroundColor="yellow";
  }
}
