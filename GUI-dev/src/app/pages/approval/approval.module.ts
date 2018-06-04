import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import {ApprovalComponent} from './approval.component';
import {ApprovalDetailsComponent} from '../approval-details/approval-details.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ApprovalComponent,
    ApprovalDetailsComponent,
  ],
})
export class ApprovalModule { }
