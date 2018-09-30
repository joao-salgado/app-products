import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';
import { Market } from '../model/market/market.mode';

@Injectable()
export class MarketService {

  private marketsUrl = `${environment.apiUrl}/markets`;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<any> {
    return this.http.get(`${this.marketsUrl}`) as Observable<any>;
  }

}
