import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // @Input() appHighlight: string = '';

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight(this.appHighlight || 'red');
    this.el.nativeElement.style.backgroundColor = 'lightgray';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.highlight(this.appHighlight || 'red');
    this.el.nativeElement.style.backgroundColor = '';
  }
}