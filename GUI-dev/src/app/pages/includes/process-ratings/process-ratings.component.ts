import { Component, OnInit, Input } from '@angular/core';
import { GatewayProvider } from '../../../@theme/providers/backend-server/gateway';
import { StoreProcessRating } from '../../../../models/models';
import { RatingChangeEvent } from 'angular-star-rating';

@Component({
  selector: 'ngx-process-ratings',
  templateUrl: './process-ratings.component.html',
  styleUrls: ['./process-ratings.component.scss'],
})
export class ProcessRatingsComponent implements OnInit {

  processRatings = [];
  newRating: StoreProcessRating = new StoreProcessRating();
  testMode: boolean = false
  @Input() processId: number

  constructor(private gateway: GatewayProvider) { }

  ngOnInit() {
    this.getProcessRatings(this.processId);
    this.newRating.processId = this.processId;
    this.newRating.rating = 0
  }

  getProcessRatings(processId: number) {
    this.gateway.getStoreProcessRatings(processId)
      .then((ratings) => {
        this.processRatings = ratings
      })
  }

  submitProcessRating(processId: number) {
    this.gateway.getUser() // because we need the username
    .then((user) => {
      const ratingToPost = this.newRating
      ratingToPost.createdBy = user.username // should be verified in backend
      ratingToPost.createdAt = new Date() // should be verified in backend
      this.gateway.postStoreProcessRatings(processId, ratingToPost)
      this.processRatings.push(ratingToPost)
      this.newRating = new StoreProcessRating() // create and set new empty rating (-> reset form)
      this.newRating.rating = 0 // is necessary because otherwise the old stars are shown
      this.newRating.processId = this.processId;
    })
  }

  onRatingChange = ($event: RatingChangeEvent) => {
    this.newRating.rating = $event.rating;
  };

}
