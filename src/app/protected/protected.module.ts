import { NgModule } from '@angular/core';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfilModule } from './profil/profil.module';
import { ParamatersModule } from './paramaters/paramaters.module';
import { PlanningModule } from './planning/planning.module';
import { WorkdayModule } from './workday/workday.module';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    DashboardModule,
    ProfilModule,
    ParamatersModule,
    PlanningModule,
    WorkdayModule
  ]
})
export class ProtectedModule { }
