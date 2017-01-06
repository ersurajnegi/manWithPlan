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

  changeData(){
    this.userData = {
  "userDetails": {
    "name": "Suraj Negi",
    "designation": "Developer",
    "imageUrl": "https://avatars.githubusercontent.com/u/16935216?v=3"
  },
  "goalsArray": [
    {
      "quarterNo": 1,
      "goals": [
        {
          "description": "Learn Angular",
          "status": "Done"
        },
        {
          "description": "Learn sacc",
          "status": "InProgress"
        },
        {
          "description": "Learn Jquery",
          "status": "Done"
        }
      ]
    },
    {
      "quarterNo": 2,
      "goals": [
        {
          "description": "Learn Angular",
          "status": "Done"
        },
        {
          "description": "Learn sacc",
          "status": "InProgress"
        },
        {
          "description": "Learn Jquery",
          "status": "Done"
        }
      ]
    },
    {
      "quarterNo": 3,
      "goals": [
        {
          "description": "Learn Angular",
          "status": "Done"
        },
        {
          "description": "Learn sacc",
          "status": "InProgress"
        },
        {
          "description": "Learn Jquery",
          "status": "Done"
        }
      ]
    },
    {
      "quarterNo": 4,
      "goals": [
        {
          "description": "Learn Angular",
          "status": "Done"
        },
        {
          "description": "Learn sacc",
          "status": "Done"
        },
        {
          "description": "Learn Jquery",
          "status": "Done"
        }
      ]
    }
  ]
}
  }
}
