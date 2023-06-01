import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMark]'
})
export class MarkDirective {

  constructor(private ref:ElementRef) { }

  ngOnInit(){
    this.ref.nativeElement.classList.add("bg-dark", "px-2", "rounded-circle", "text-light")
  }

}
