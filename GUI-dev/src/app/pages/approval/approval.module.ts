import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import {ApprovalComponent} from './approval.component';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ApprovalComponent,
  ],
})
export class ApprovalModule { }
