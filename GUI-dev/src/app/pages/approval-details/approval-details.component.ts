import {Component, Input, OnInit} from '@angular/core';
import {Process} from '../../../models/models';
import {Review} from '../../../models/models';

@Component({
  selector: 'ngx-approval-details',
  templateUrl: './approval-details.component.html',
  styleUrls: ['./approval-details.component.scss'],
})
export class ApprovalDetailsComponent implements OnInit {

  @Input() process: Process;
  @Input() selectedProcessFromParent: Process;
  @Input() selectedReviewsFromParent: [Review];
  public processes;
  public reviews;


  constructor() {

  }

  ngOnInit() {
    /*
    this.process = new Process();
    this.process.created_at = new Date();
    this.process.process_name = 'Business-Trip-Application-Process';
    this.process.process_description = 'This S-BPM process model describes how a employee applies for a business trip';
    this.process.u_id = 6;
    */

  }

  postComment() {
    // add API calls for posting and approving/denying models
  }

  approveProcessModel() {

  }

  denyProcessModel() {

  }

}
