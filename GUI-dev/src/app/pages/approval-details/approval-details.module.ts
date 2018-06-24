import { NgModule, OnInit } from '@angular/core';
import { GatewayProvider } from '../../@theme/providers/backend-server/gateway';
import { ActivatedRoute } from '@angular/router';

import { ThemeModule } from '../../@theme/theme.module';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    // ApprovalDetailsComponent,
  ],
})
export class ApprovalDetailsModule{}
