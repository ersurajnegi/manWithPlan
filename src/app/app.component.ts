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
  options: any = null;
  ngOnInit() {
    this.options = {
      theme: "dark-thick",
      axis: "y"
    }
    this.getData();
    
  }


  getData() {
    this._apiService.getUserData()
      .subscribe(data => {
        this.userData = data;
        console.log(this.userData);
      })
  }
  onCreate($event) {
    console.log('Create scroller done');
  }
  onInit($event) {
    console.log('Init scroller done');
  }
  onScrollStart($event) {
    console.log('Scoll started');
  }
  onScroll($event) {
    console.log('on scroll done');
  }
  whileScrolling($event) {
    console.log('while scrolling done');
  }
  onTotalScroll($event) {
    console.log('total scroller done');
  }
  onTotalScrollBack($event) {
    console.log('total scroller call back done');
  }
}
