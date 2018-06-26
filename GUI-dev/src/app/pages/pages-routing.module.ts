import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from '../auth-guard.service';
import {ApprovalComponent} from './approval/approval.component';
import {ApprovalDetailsComponent} from './approval-details/approval-details.component';
import {ActiveProcessesComponent} from './dashboard/components/activeProcesses/activeProcesses.component';
// import {EventLoggerComponent} from './admin/components/eventLogger/eventLogger.component';
import { ProcessStoreSearchComponent } from './processstore-search/processstore-search.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import { ProcessStoreDetailsComponent } from './processstore-details/processstore-details.component';
import {ApprovalAuthGuard} from '../approval-auth-guard.service';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard],
    },
    {
      path: 'activeProcesses',
      component: ActiveProcessesComponent,

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
