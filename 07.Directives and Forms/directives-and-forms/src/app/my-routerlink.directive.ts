import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyRouterlink]'
})
export class MyRouterlinkDirective implements OnInit{
@Input() appMyRouterlink:string = '';
  constructor(private elRef: ElementRef, private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
    console.log(this.appMyRouterlink);

    this.renderer.listen(this.elRef.nativeElement, 'click', this.clickHandler.bind(this))
  }

  clickHandler(e: MouseEvent){
    console.log('click');

    this.router.navigate([this.appMyRouterlink])
  }

}
