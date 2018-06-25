import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ProcessRatingModule } from '../includes/process-ratings/process-ratings.module';
import { ProcessStoreDetailsComponent } from './processstore-details.component';
import {ModalProcessstoreDetailsComponent} from "./modal/modal-processstore-details.component";
import {ProcessstoreDetailsModal} from "./modal/processstore-details.modal";

@NgModule({
  imports: [
    ThemeModule,
    ProcessRatingModule,
  ],
  declarations: [
    ProcessStoreDetailsComponent,
    ProcessstoreDetailsModal,
  ],
  entryComponents: [
    ProcessstoreDetailsModal,
  ],
})
export class ProcessstoreDetailsModule { }
