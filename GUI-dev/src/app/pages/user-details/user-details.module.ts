import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {UserDetailsComponent} from './user-details.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    UserDetailsComponent,
  ],
})
export class UserDetailsModule { }
