import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import {BusinessObjects} from "./components/activeProcessDetail/businessObjects.component";
import {StartableProcesses} from "./components/startableProcesses/startableProcesses.component";
import {TerminatedProcesses} from "./components/terminatedProcesses/terminatedProcesses.component";
import {ActiveProcessDetail} from "./components/activeProcessDetail/activeProcessDetail.component";
import {ActiveProcesses} from "./components/activeProcesses/activeProcesses.component";


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    DashboardComponent,
    ActiveProcesses,
    ActiveProcessDetail,
    TerminatedProcesses,
    StartableProcesses,
    BusinessObjects,
  ],
})
export class DashboardModule { }
