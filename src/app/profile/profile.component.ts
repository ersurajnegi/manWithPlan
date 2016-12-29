import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnChanges {
  
  @Input() userDetails: any;
  // set userDetails(fromParent: any) {
  //   if (fromParent) {
  //     console.log("Data from from parent is : " + fromParent);
  //     this.userDetails = fromParent;
  //   }
  //   else {
  //     console.log("Data from from parent undefined");
  //   }

  // }

  ngOnChanges(){
    console.log("data from parent : "+ this.userDetails);
  }

  ngOnInit() {
  }

}
