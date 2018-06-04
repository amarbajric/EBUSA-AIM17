import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Admin } from './admin.component';
import { routing }       from './admin.routing';

import { ActiveProcesses } from './components/activeProcesses/activeProcesses.component';
import { ImportProcessModel } from './components/importProcessModel/importProcessModel.component';
import { TerminatedProcesses } from './components/terminatedProcesses/terminatedProcesses.component';
import { ProcessModels } from './components/processModels/processModels.component';
import { EventLogger } from './components/eventLogger/eventLogger.component';
import { ManipulatePNML } from './components/manipulatePNML/manipulatePNML.component';
import { GenerateOWL } from './components/generateOWL/generateOWL.component';
import {AuthGuard} from "../../auth-guard.service";
import {ThemeModule} from "../../@theme/theme.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    ThemeModule,
  ],
  declarations: [
    Admin,
    ActiveProcesses,
    TerminatedProcesses,
    ProcessModels,
    ImportProcessModel,
    EventLogger,
    ManipulatePNML,
    GenerateOWL
  ],
  providers: [
    AuthGuard,
  ]
})
export default class AdminModule {}
