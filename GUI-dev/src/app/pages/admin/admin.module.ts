import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from './admin.component';
import { routing } from './admin.routing';

import { ActiveProcessesComponent } from './components/activeProcesses/activeProcesses.component';
import { ImportProcessModelComponent } from './components/importProcessModel/importProcessModel.component';
import { TerminatedProcessesComponent } from './components/terminatedProcesses/terminatedProcesses.component';
import { ProcessModelsComponent } from './components/processModels/processModels.component';
import { EventLoggerComponent } from './components/eventLogger/eventLogger.component';
import { ManipulatePNMLComponent } from './components/manipulatePNML/manipulatePNML.component';
import { GenerateOWLComponent } from './components/generateOWL/generateOWL.component';
import {AuthGuard} from '../../auth-guard.service';
import {ThemeModule} from '../../@theme/theme.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    ThemeModule,
  ],
  declarations: [
    AdminComponent,
    ActiveProcessesComponent,
    TerminatedProcessesComponent,
    ProcessModelsComponent,
    ImportProcessModelComponent,
    EventLoggerComponent,
    ManipulatePNMLComponent,
    GenerateOWLComponent,
  ],
  providers: [
    AuthGuard,
  ],
})
export default class AdminModule {}
