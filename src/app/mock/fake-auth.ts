import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FakeAuth{

  login(value: string) {
    return of({
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA'
    }).pipe(delay(1000));
  }
}
