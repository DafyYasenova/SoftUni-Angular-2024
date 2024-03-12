import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    console.log(this.elRef.nativeElement);


    // Bad practice:
    this.elRef.nativeElement.style.background= 'pink';


    // Good practice:
    this.renderer.setStyle(this.elRef.nativeElement, 'background', 'aquamarine');

  }

}
