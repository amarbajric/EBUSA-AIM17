import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {ImportProcessModelComponent} from './importProcessModel.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ImportProcessModelComponent,
  ],
})
export class ImportProcessModelModule { }
