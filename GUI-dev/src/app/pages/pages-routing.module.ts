import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from '../auth-guard.service';
import {ApprovalComponent} from './approval/approval.component';

import {ApprovalDetailsComponent} from './approval-details/approval-details.component';

// import {EventLoggerComponent} from './admin/components/eventLogger/eventLogger.component';
import { ProcessStoreSearchComponent } from './processstore-search/processstore-search.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {MyProcessesComponent} from './dashboard/components/myProcesses/myProcesses.component';

import { ProcessStoreDetailsComponent } from './processstore-details/processstore-details.component';
import {CreateProcessComponent} from './create-process/create-process.component';

import { ReviewProcessesComponent } from './dashboard/components/reviewProcesses/reviewProcesses.component';
import {ModalComponent} from './dashboard/components/modal/modal.component';
import {ValidatedProcessesComponent} from './dashboard/components/validatedProcesses/validatedProcesses.component';
import {CreateOrgaModalComponent} from './dashboard/components/createOrgaModal/createOrgaModal.component';

import {ApprovalAuthGuard} from '../approval-auth-guard.service';



const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard],
      children: [{
          path: '',
          redirectTo: 'myProcesses',
          pathMatch: 'full',
        }, {
          path: 'myProcesses',
          component: MyProcessesComponent,
        }, {
          path: 'validation',
          component: ReviewProcessesComponent,

      },
        {
          path: 'validated',
          component: ValidatedProcessesComponent,
        },
        {
        path: 'modalView',
        component: ModalComponent,

      }, {
          path: 'createOrgaModalView',
          component: CreateOrgaModalComponent,

        },

      ],
    },
    {
      path: 'createProcess',
      component: CreateProcessComponent,
      canActivate: [AuthGuard],

    },

    {
      path: 'processstore-search',
      component: ProcessStoreSearchComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'processstore-details/:processId',
      component: ProcessStoreDetailsComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'approval',
      component: ApprovalComponent,
      canActivate: [ApprovalAuthGuard],
    },
    {
      path: 'approval-details/:processId',
      component: ApprovalDetailsComponent,
      canActivate: [AuthGuard],
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'user-details',
      component: UserDetailsComponent,
      canActivate: [AuthGuard],
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
