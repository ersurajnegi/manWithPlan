import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ApiService } from '../common/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;
  currentYear: number;
  yearsArray: Array<any> = [];
  ngOnInit() {
    this.generateYearArray();
    this.getData(this.currentYear);
    
  }
  constructor(private _apiService: ApiService) {
  }

  getData(year) {
    this._apiService.getUserData(year)
      .subscribe(data => {
        this.userData = data;
        console.log(this.userData);
      })
  }
  indexChanged($event){
    console.log($event);
  }
  generateYearArray(){
        this.currentYear = new Date().getFullYear();

        for(let i=this.currentYear - 2;i<this.currentYear + 2; i++){
          this.yearsArray.push({label: i, value: i});
        }
  }
}
