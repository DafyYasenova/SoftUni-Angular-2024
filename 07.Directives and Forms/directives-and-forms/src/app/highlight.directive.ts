import { Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';


type MyVoid = () =>void;
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy{


  // hostListener demo:

  // @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
  //   console.log('mouse over', e);
  // }


unSubFromEventsArray :MyVoid[] = [];

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  
  ngOnInit(): void {
    // console.log(this.elRef.nativeElement);

    // Bad practice:
    // this.elRef.nativeElement.style.background= 'pink';

    // Good practice:
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'aquamarine');


    const mouseEnterEvent = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mouseEnterHandler.bind(this),
    );

    const mouseLeaveEvent = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler.bind(this));


      this.unSubFromEventsArray.push(mouseEnterEvent);
      this.unSubFromEventsArray.push(mouseLeaveEvent);
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

  ngOnDestroy(): void {
    console.log('On destroy');

    console.log(this.unSubFromEventsArray);
   }
 
}
