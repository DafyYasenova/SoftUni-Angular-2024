import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructuralDir]',
  exportAs: 'appMyStructuralDir',
})
export class MyStructuralDirDirective implements OnInit, OnChanges {
  @Input() appMyStructuralDir: boolean = false;
  constructor(private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    console.log(this.appMyStructuralDir);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges:', this.appMyStructuralDir);

    if (this.appMyStructuralDir) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear();
    }
  }

}
