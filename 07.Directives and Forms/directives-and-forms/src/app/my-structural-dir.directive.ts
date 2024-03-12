import { Directive, Input, OnChanges, OnInit, Optional, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructuralDir]',
  exportAs: 'appMyStructuralDir',
})
export class MyStructuralDirDirective implements OnInit, OnChanges {
  @Input() appMyStructuralDir: boolean = false;
  @Input() myTempRef: TemplateRef<any> | undefined;

  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    console.log(this.appMyStructuralDir);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('onChanges:', this.appMyStructuralDir);
    console.log('myTempRef', this.myTempRef);
    console.log('templateRef', this.templateRef)

    const template = this.templateRef || this.myTempRef;

    if (this.appMyStructuralDir) {
      this.viewContainerRef.createEmbeddedView(template, {
        myCustomValue: 'This is my custom message!',
        myNum: 123,
        $implicit: 'Defaut value',

      })
    } else {
      this.viewContainerRef.clear();
    }
  }

}
