import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

import {Http, Headers, RequestOptions, Response} from '@angular/http';

@Injectable()
export class ApiService {

  // private _apiUrl:string = 'https://api.myjson.com/bins/1fjl37';
  private _apiUrl:string = 'https://api.myjson.com/bins/cvumb';
  constructor(private _http : Http) {
  }
   getUserData(year){
      return this._http.get(this._apiUrl)
              .map(res => {
                return res.json();
              });
   }
}
