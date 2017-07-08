import { Component, OnInit } from '@angular/core';
import { ApiService } from './common/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private _apiService: ApiService
  ) { }
  title: string = "Man With The Plan"
  userData: any = null;
  ngOnInit() {
    this.getData();
  }


  getData() {
    this._apiService.getUserData()
      .subscribe(data => {
        this.userData = data;
        console.log(this.userData);
      })
  }
}
