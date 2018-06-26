import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {CreateProcessComponent} from './create-process.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    CreateProcessComponent,
  ],
})
export class CreateProcessModule { }
