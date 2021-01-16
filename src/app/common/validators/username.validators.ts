import {AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ZipcodeService} from '../../services/fake';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {
        cannotContainSpace: true
      };
      return null;
    }
  }
  static uniqueUsernameValidator(zipcodeService: ZipcodeService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return zipcodeService.fakeHttp(control.value).pipe(
        map((result: boolean) => result ? null : {invalidAsync: true})
      );
    };
  }
}
export class ZipcodeValidator {

}
