import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './appselect.component.html',
  styleUrls: ['./appselect.component.css']
})
export class AppselectComponent {

  @Input() defaultValue: any;
  @Input() optionsArray:Array<any> = [];

  @Output() indexChanged = new EventEmitter();

ngOnChanges(){
  
}
  onSelect(data) {
    // this.selectedValue = data; 
    console.log(data);
    this.indexChanged.emit(data);
  }
}
