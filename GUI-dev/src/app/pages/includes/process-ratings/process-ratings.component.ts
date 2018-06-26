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
  newRating: StoreProcessRating = new StoreProcessRating()
  testMode: boolean = false
  @Input() processId: string

  constructor(private gateway: GatewayProvider) { }

  ngOnInit() {
    this.getProcessRatings(this.processId)
  }

  getProcessRatings(processId: string) {
    if (this.testMode) {

      const rating1 = new StoreProcessRating()
      rating1.ratingId = 1
      rating1.createdBy = 'user1'
      rating1.comment = 'asdad ad adasdasdasdadsda a d ad as dasdasdad gomrgjdrg'
      rating1.rating = 2
      rating1.createdAt = new Date(2018, 3, 20)


      const rating2 = new StoreProcessRating()
      rating2.ratingId = 2
      rating2.createdBy = 'user2'
      rating2.comment = 'asdad ad adasdasdasdadsda a d ad as dasdasdad gomrgjdrg'
      rating2.rating = 4
      rating2.createdAt = new Date(2018, 5, 15)

      this.processRatings = [rating1, rating2]
    } else {
      this.gateway.getStoreProcessRatings(processId) // because we need the username
        .then((ratings) => {
          this.processRatings = ratings
        })
    }
  }

  submitProcessRating(processId: string) {
    this.gateway.getUser() // because we need the username
      .then((user) => {
        const ratingToPost = this.newRating
        if (!this.testMode) {
          this.gateway.postStoreProcessRatings(processId, ratingToPost)
        }
        ratingToPost.createdBy = user.username // set username
        ratingToPost.createdAt = new Date() // set current date
        this.processRatings.push(ratingToPost)
        this.newRating = new StoreProcessRating() // create and set new empty rating (-> reset form)
        this.newRating.rating = 0 // is necessary because otherwise the old stars are shown
      })
  }

  onRatingChange = ($event: RatingChangeEvent) => {
    this.newRating.rating = $event.rating;
  };

}
