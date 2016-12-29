import { Component, OnInit, Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnChanges {
  @Input() goals:any [];

  ngOnChanges() {
    console.log("Goals : " + this.goals);
  }


}
