import { Component, OnInit } from '@angular/core';
import { ApiService } from './common/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    userData: any;
    userDetails ={};
    ngOnInit(){
        this.getData();
    }
    constructor(private _apiService: ApiService){
    }

    getData(){
        this._apiService.getUserData()
        .subscribe(data =>{
            this.userData = data[0];
            //this.userDetails = this.userData.userDetails;
            console.log(this.userData);
        })
    }
}
