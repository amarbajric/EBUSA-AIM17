import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProcessRatingModule } from '../includes/process-ratings/process-ratings.module';
import { ProcessStoreDetailsComponent } from './processstore-details.component';

@NgModule({
  imports: [
    ThemeModule,
    ProcessRatingModule,
  ],
  declarations: [
    ProcessStoreDetailsComponent,
  ],
})
export class ProcessstoreDetailsModule { }
