import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'al-planning-workday-item',
  templateUrl: './planning-workday-item.component.html',
  styles: [
  ]
})
export class PlanningWorkdayItemComponent implements OnInit {

  currentWorkDay: { dueDate: string, doneTasks: number, remainingTasks: number};

  @Input('workday')
  set workday(workday: { dueDate: string, doneTasks: number, remainingTasks: number}){
    this.currentWorkDay = workday || {};

    if('Lundi' === workday.dueDate){
      this.currentWorkDay.dueDate += ' (Aujourd\'hui)';
    }
  }

  @Output() workdayRemoved = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  removeWorkday(dueDate: string){
    this.workdayRemoved.emit(dueDate);
  }

}
