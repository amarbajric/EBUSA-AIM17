import { Routes, RouterModule }  from '@angular/router';
import { Admin } from './admin.component';
import { ActiveProcesses } from './components/activeProcesses/activeProcesses.component';
import { TerminatedProcesses } from './components/terminatedProcesses/terminatedProcesses.component';
import { ProcessModels } from './components/processModels/processModels.component';
import { ImportProcessModel } from './components/importProcessModel/importProcessModel.component';
import { EventLogger } from './components/eventLogger/eventLogger.component';
import { ManipulatePNML } from './components/manipulatePNML/manipulatePNML.component';
import { GenerateOWL } from './components/generateOWL/generateOWL.component';
import {AuthGuard} from "../../auth-guard.service";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Admin,
    canActivate: [AuthGuard],
    children: [
      { path: 'active', component: ActiveProcesses },
      { path: 'terminated', component: TerminatedProcesses },
      { path: 'models', component: ProcessModels },
      { path: 'import', component: ImportProcessModel },
      { path: 'eventLogger', component: EventLogger },
      { path: 'manipulatePNML', component: ManipulatePNML },
      { path: 'generateOWL', component: GenerateOWL },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
