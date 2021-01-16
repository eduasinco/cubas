import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AppError} from '../common/app-error';
import {BadInputError} from '../common/bad-input-error';
import {NotFoundError} from '../common/not-found-error';

export interface Cuba {
  image: string;
  volume: number;
  quantity: number;
  usage: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:5000/login';

  constructor(private http: HttpClient) { }

  login() {
    return this.http.get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  isUsernameUnique(username: string) {
    return this.http.get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

      if (error.status === 400) {
        return throwError(new BadInputError());
      }
      if (error.status === 404) {
        return throwError(new NotFoundError());
      }
      return throwError(new AppError());
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
