import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { ProcessStoreSearchComponent } from './processstore-search.component';
import { SimpleSearchPipe } from '../../simple-search.pipe';
import { StarRatingModule } from 'angular-star-rating';
import { ProcessFilterPipe } from '../../process-filter.pipe';


@NgModule({
  imports: [
    ThemeModule,
    StarRatingModule.forRoot(),
  ],
  declarations: [
    ProcessStoreSearchComponent,
    SimpleSearchPipe,
    ProcessFilterPipe,
  ],
})
export class ProcessStoreSearchModule { }
