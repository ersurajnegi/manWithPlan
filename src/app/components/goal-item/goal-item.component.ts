import { Component, OnInit, Input, Output, EventEmitter, OnDestroy , OnChanges} from '@angular/core';

@Component({
  selector: 'app-goal-item',
  templateUrl: './goal-item.component.html',
  styleUrls: ['./goal-item.component.scss']
})
export class GoalItemComponent implements OnInit, OnDestroy, OnChanges {
  @Input() goalItem: any;
  @Input() quarterNumber: Number;
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
  @Output() changeStatus: EventEmitter<any> = new EventEmitter();
  isLoading :boolean;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  deleteGoal(id: any) {
    this.isLoading = true;
    this.deleteEvent.emit({
      id: id
    });
  }
  changeGoalStatus(item: any) {
    this.changeStatus.emit({
      id: item.id,
      status : this.getStatus(item.status)
    });
  }

  ngOnDestroy(){
    this.isLoading = null;
  }
  getStatus(status : string){
    return status == "Done" ? "InProgress" : "Done";
  }
}
