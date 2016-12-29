import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ApiService } from '../common/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges {

  ngOnChanges() {
    //console.log("data from parent : " + this.userDetails);
  }

  userData: any;
  ngOnInit() {
    this.getData();
  }
  constructor(private _apiService: ApiService) {
  }

  getData() {
    this._apiService.getUserData()
      .subscribe(data => {
        this.userData = data;
        console.log(this.userData);
      })
  }
}
