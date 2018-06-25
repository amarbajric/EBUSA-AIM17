import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {ProcessModelConfigureComponent} from './processmodel-configure.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ProcessModelConfigureComponent,
  ],
})
export class ProcessModelConfigureModule { }
