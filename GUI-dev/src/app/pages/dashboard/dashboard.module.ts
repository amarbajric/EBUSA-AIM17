import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import {BusinessObjectsComponent} from './components/activeProcessDetail/businessObjects.component';
import {StartableProcessesComponent} from './components/startableProcesses/startableProcesses.component';
import {TerminatedProcessesComponent} from './components/terminatedProcesses/terminatedProcesses.component';
import {ActiveProcessDetailComponent} from './components/activeProcessDetail/activeProcessDetail.component';
import { ActiveProcessesComponent} from './components/activeProcesses/activeProcesses.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    DashboardComponent,
    ActiveProcessesComponent,
    ActiveProcessDetailComponent,
    TerminatedProcessesComponent,
    StartableProcessesComponent,
    BusinessObjectsComponent,
  ],
})
export class DashboardModule { }
