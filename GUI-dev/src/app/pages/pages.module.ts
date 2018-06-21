import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import {HomeModule} from './home/home.module';
import { ProcessStoreSearchModule } from './processstore-search/processstore-search.module';
import {ApprovalModule} from './approval/approval.module';
import {ApprovalDetailsModule} from './approval-details/approval-details.module';

import AdminModule from './admin/admin.module';

import {UserDetailsModule} from './user-details/user-details.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    HomeModule,
    ApprovalModule,
    ApprovalDetailsModule,
    AdminModule,
    UserDetailsModule,


    ProcessStoreSearchModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
