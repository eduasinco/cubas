import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials) {
    return this.http.post<{token: string}>('/api/authenticate',
      JSON.stringify(credentials))
      .pipe(
        map(response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            return true;
          }
          return false;
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const helper = new JwtHelperService();
    return helper.isTokenExpired(localStorage.getItem('token'));
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) { return null; }
    const helper = new JwtHelperService();
    return helper.decodeToken(token);
  }
}
