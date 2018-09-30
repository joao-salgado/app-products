import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';
import { Stack } from '../model/stack/stack.model';

@Injectable()
export class StackService {

  private stacksUrl = `${environment.apiUrl}/stacks`;

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<any> {
    return this.http.get(`${this.stacksUrl}`) as Observable<any>;
  }

}
