import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';
// import { ProductFilter } from './../model/product/product-filter.model';

@Injectable()
export class ProductService {

  private productsUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) { }

  public findByFilter(filter: any): Observable<any> {

    let params = new HttpParams();

    if (filter.markets) {
      params = params.append('markets', filter.markets);
    }

    if (filter.stacks) {
      params = params.append('stacks', filter.stacks);
    }

    params = params.append('page', '0');
    params = params.append('size', '999');

    return this.http.get(`${this.productsUrl}`, {
      params: params
    }) as Observable<any>;

  }
}
