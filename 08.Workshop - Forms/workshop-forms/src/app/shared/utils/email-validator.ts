import { ValidatorFn } from "@angular/forms";

  // /^[A-Za-z0-9]{4,}@(gmail\.com|abv\.bg)$/gm
  export function emailValidator(domains: string[]): ValidatorFn {
    return (control) => {
      console.log('control value:', control.value);
      return null;
    }
  }