import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // console.log(this.elRef.nativeElement);

    // Bad practice:
    // this.elRef.nativeElement.style.background= 'pink';

    // Good practice:
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'aquamarine');


    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mouseEnterHandler.bind(this),
    );

    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler.bind(this))
  }


  mouseEnterHandler(e: MouseEvent): void {
    // console.log(e);

    // Setting styles:

    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'orange',
    // );

    // Setting classes:
    this.renderer.addClass(this.elRef.nativeElement, 'highlight')

  }
  mouseLeaveHandler(e: MouseEvent): void {
    // console.log('mouse leave');

    // Setting styles:
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'grey',
    // )

    // Setting classes:

    this.renderer.removeClass(this.elRef.nativeElement, 'highlight')

  };
}
