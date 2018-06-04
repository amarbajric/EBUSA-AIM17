import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Process} from '../../../models/models';
import {Review} from '../../../models/models';

@Component({
  selector: 'ngx-approval-details',
  templateUrl: './approval-details.component.html',
  styleUrls: ['./approval-details.component.scss'],
})
export class ApprovalDetailsComponent implements OnInit {

  @Input() process: Process;
  @Input() selectedProccesForDetails: Process;
  public processes;
  public reviews;

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
    exampleReview1.process_id = 2;

    this.processes = [exampleProcess1, exampleProcess2];
    this.reviews = [exampleReview1, exampleReview2];
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

}
