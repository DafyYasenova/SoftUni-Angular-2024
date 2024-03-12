import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMaxCount]', 

  // add manually provides:
  providers: [
    {
    provide: NG_VALIDATORS,
    useExisting: MaxCountDirective,
    multi: true,
    }

  ],
})
export default class MaxCountDirective implements Validator {
  @Input() appMaxCount: number | undefined;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(this.appMaxCount)
    return null;
  }
}
