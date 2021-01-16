import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ZipcodeService {
  private validZipcodes = ['00001', '00002', '00003', '00004'];

  fakeHttp(value: string) {
    return of(this.validZipcodes.includes(value)).pipe(delay(1000));
  }
}
