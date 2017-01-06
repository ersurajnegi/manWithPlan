import { Component, OnInit, Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnChanges {
  @Input() goal;
  title = "";

  ngOnChanges() {
    console.log("Goals : " + this.goal);
  }

  addGoal(){
      this.goal.goals.push({description: this.title ,status:'InProgress'});
      this.title = "";
  }

  changeGoalStatus(index){
      this.goal.goals[index].status ="Done";
  }
}
