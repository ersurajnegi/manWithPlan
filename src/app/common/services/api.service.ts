import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class ApiService {

  // private _apiUrl:string = 'https://api.myjson.com/bins/1fjl37';
  private _apiUrl: string = '/api/Values';
  constructor(private _http: Http) {
  }
  getUserData() {
    return this._http.get(this._apiUrl)
      .map(res => {
        return res.json();
      });
  }
}
