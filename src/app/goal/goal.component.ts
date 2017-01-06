import { Component, OnInit, Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnChanges {
  @Input() goal:any [];

  ngOnChanges() {
    console.log("Goals : " + this.goal);
  }


}
