import { Injectable } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZipcodeService {
  private validZipcodes = ['00001', '00002', '00003', '00004'];

  fakeHttp(value: string) {
    return of(this.validZipcodes.includes(value)).pipe(delay(1000));
  }
}
