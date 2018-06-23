import { NgModule } from '@angular/core';
import { ProcessRatingsComponent } from './process-ratings.component';
import { ThemeModule } from '../../../@theme/theme.module';
import { StarRatingModule } from 'angular-star-rating';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ThemeModule,
    FormsModule,
    StarRatingModule.forRoot(),
  ],
  declarations: [
    ProcessRatingsComponent,
  ],
  exports: [
    ProcessRatingsComponent,
  ],
})
export class ProcessRatingModule { }
