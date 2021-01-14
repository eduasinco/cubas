import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CubaPaginator} from '../cubas/cubas.component';

@Injectable({
  providedIn: 'root'
})
export class CubasService {
  private url = 'http://localhost:5000/cubas';

  constructor(private http: HttpClient) { }

  getCubas() {
    return this.http.get<CubaPaginator>(this.url);
  }
}
