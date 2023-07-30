import {Directive, forwardRef} from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[plzValidate]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => PlzValidatorDirective), multi: true }
  ]
})
export class PlzValidatorDirective implements Validator {

  constructor() {}

  validate(control: FormControl): ValidationErrors | null {
    const plzPattern = /^([0]{1}[1-9]{1}|[1-9]{1}[0-9]{1})[0-9]{3}/g;

    if (control.value === null || control.value === undefined) return null;

    return plzPattern.test(control.value) ? null : {
      plzFormat: {valid: false}
    };
  }

  registerOnValidatorChange(fn: () => void) {
  }

}
