import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ActiveProcessesComponent } from './components/activeProcesses/activeProcesses.component';
import { TerminatedProcessesComponent } from './components/terminatedProcesses/terminatedProcesses.component';
import { ProcessModelsComponent } from './components/processModels/processModels.component';
import { EventLoggerComponent } from './components/eventLogger/eventLogger.component';
import { ManipulatePNMLComponent } from './components/manipulatePNML/manipulatePNML.component';
import { GenerateOWLComponent } from './components/generateOWL/generateOWL.component';
import {AuthGuard} from '../../auth-guard.service';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'active', component: ActiveProcessesComponent },
      { path: 'terminated', component: TerminatedProcessesComponent },
      { path: 'models', component: ProcessModelsComponent },
      { path: 'eventLogger', component: EventLoggerComponent },
      { path: 'manipulatePNML', component: ManipulatePNMLComponent },
      { path: 'generateOWL', component: GenerateOWLComponent },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
