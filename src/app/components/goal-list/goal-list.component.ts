import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent implements OnInit {
  @Input() goalsData: any = Array;
  @ViewChild('goalTitle') input;
  isAdding: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  addGoal(title: string) {
    this.isAdding = true;
    setTimeout(() => {
      this.goalsData.goals.unshift({
        id : this.goalsData.goals.length,
        description: title,
        status: "InProgress"
      });
      this.input.nativeElement.value = "";
      this.isAdding = false;
    }, 2000);

  }

  deleteGoal(event) {
    var index = this.goalsData.goals.findIndex((item) => {
      return item.id == event.id
    });

    setTimeout(() => {
      this.goalsData.goals.splice(index, 1);
    }, 2000);
  }

  goalUpdated(event) {
    var index = this.goalsData.goals.findIndex((item) => {
      return item.id == event.id
    });
    setTimeout(() => {
      this.goalsData.goals[index].status = event.status;
    }, 500);

  }
}
