import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import {ApprovalComponent} from './approval.component';
import {ApprovalDetailsComponent} from '../approval-details/approval-details.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ApprovalComponent,
    ApprovalDetailsComponent,
  ],
})
export class ApprovalModule { }
