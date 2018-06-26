import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProcessRatingModule } from '../includes/process-ratings/process-ratings.module';
import { ProcessStoreDetailsComponent } from './processstore-details.component';
import {ProcessstoreDetailsModalComponent} from './modal/processstore-details.modal';

@NgModule({
  imports: [
    ThemeModule,
    ProcessRatingModule,
  ],
  declarations: [
    ProcessStoreDetailsComponent,
    ProcessstoreDetailsModalComponent,
  ],
  entryComponents: [
    ProcessstoreDetailsModalComponent,
  ],
})
export class ProcessstoreDetailsModule { }
