import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Process} from '../../../models/models';
import {Review} from '../../../models/models';


@Component({
  selector: 'ngx-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss'],
})
export class ApprovalComponent implements OnInit {

  @Input() process: Process;
  public processes: Process[] = [];
  @Input() review: Review;
  public reviews: Review[] = [];
  public selectedProcess: Process;
  public selectedReviews: Review[] = [];


  iFrameSource: string = 'http://localhost:4000/#/';
  // reviews: string[] = ['Awesome process model', 'This could use some serious improvement', 'Subject X is missing'];
  // processModels: string[] = ['Process 1', 'Process 2', 'Process 3'];

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    /*
    this.process = new Process();
    this.process.created_at = new Date();
    this.process.process_name = 'Business-Trip-Application-Process';
    this.process.process_description = 'This S-BPM process model describes how a employee applies for a business trip';
    this.process.u_id = 6;
    */

    const exampleProcess1 = new Process()
    exampleProcess1.created_at = new Date();
    exampleProcess1.process_name = 'Business-Trip-Application-Process'
    exampleProcess1.process_description = 'This S-BPM process model describes how a employee applies for a business trip'
    exampleProcess1.creator = 'fgraf';
    exampleProcess1.process_id = 1;
    exampleProcess1.version = 2.0;
    exampleProcess1.state = 'not approved';

    const exampleProcess2 = new Process()
    exampleProcess2.created_at = new Date();
    exampleProcess2.process_name = 'Hiring-Process'
    exampleProcess2.process_description = 'This S-BPM process model describes how a new employee is hired by a company'
    exampleProcess2.creator = 'mwageneder';
    exampleProcess2.process_id = 2;
    exampleProcess2.version = 1.0;
    exampleProcess2.state = 'not approved';

    const exampleReview1 = new Review()
    exampleReview1.comment = 'Awesome process model';
    exampleReview1.uploader = 'fgraf';
    exampleReview1.created_at = new Date();
    exampleReview1.process_id = 1;

    const exampleReview2 = new Review()
    exampleReview2.comment = 'This could use some serious improvement';
    exampleReview2.uploader = 'singer';
    exampleReview2.created_at = new Date();
    exampleReview2.process_id = 2;

    const exampleReview3 = new Review()
    exampleReview3.comment = 'We will adapt the process to the new requirements';
    exampleReview3.uploader = 'fgraf';
    exampleReview3.created_at = new Date();
    exampleReview3.process_id = 2;

    const exampleReview4 = new Review()
    exampleReview4.comment = 'We have fixed the model now';
    exampleReview4.uploader = 'fgraf';
    exampleReview4.created_at = new Date();
    exampleReview4.process_id = 2;

    this.processes = [exampleProcess1, exampleProcess2];
    this.reviews = [exampleReview1, exampleReview2, exampleReview3, exampleReview4];
  }

  switchIFrameSource() {
    this.iFrameSource = 'http://localhost:4200/#/home';
  }

  transformUrl(url: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  postComment() {
    // add API calls for posting and approving/denying models
  }

  approveProcessModel() {

  }

  denyProcessModel() {

  }

  loadDetails(processID: number) {
    // console.log(processID);
    this.selectedReviews = [];

    for (const process of this.processes) {
       // console.log(process);
      if (process.process_id === processID) {
        this.selectedProcess = process;
      }
    }

    for (const review of this.reviews) {
      // console.log(review);
      if (review.process_id === processID) {
        this.selectedReviews.push(review);
      }
    }
    // console.log(this.selectedReviews);

  }

}
