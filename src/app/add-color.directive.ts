import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddColor]'
})
export class AddColorDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}