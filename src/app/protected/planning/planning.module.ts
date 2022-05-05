import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import { PlanningComponent } from './planning/planning.component';
import { PlanningWorkdayComponent } from './planning-workday/planning-workday.component';
import { PlanningWorkdayListComponent } from './planning-workday-list/planning-workday-list.component';
import { PlanningWorkdayItemComponent } from './planning-workday-item/planning-workday-item.component';



@NgModule({
  declarations: [
    PlanningComponent,
    PlanningWorkdayComponent,
    PlanningWorkdayListComponent,
    PlanningWorkdayItemComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PlanningModule { }
