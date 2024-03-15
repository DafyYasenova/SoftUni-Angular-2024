import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from '../utils/email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true,
    }
  ]
})
export class EmailDirective implements Validator {
  @Input() appEmail: string[] = [];
  constructor() { }

  // validator: ValidatorFn = () => null;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // console.log('control', control.value);
    const validatorFn = emailValidator(this.appEmail);

    return validatorFn(control);
    // console.log({ result })

  
  }

  // ngOnChanges(changes: SimpleChanges): void {

  //   const { currentValue } = changes['appEmail'];
  //   console.log({ currentValue });

  //   if (currentValue?.length) {
  //     this.validator = emailValidator(currentValue);
  //   }

  // }


}
