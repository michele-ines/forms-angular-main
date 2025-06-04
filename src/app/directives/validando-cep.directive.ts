import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appValidandoCep]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidandoCepDirective,
    multi: true
  }]
})
export class ValidandoCepDirective {

  constructor() { }

}
