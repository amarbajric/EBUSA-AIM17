import {Component, OnInit} from '@angular/core';
import { StoreProcess} from '../../../models/models';
import {Review} from '../../../models/models';
import { GatewayProvider } from '../../@theme/providers/backend-server/gateway';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'ngx-approval-details',
  templateUrl: './approval-details.component.html',
  styleUrls: ['./approval-details.component.scss'],
})
export class ApprovalDetailsComponent implements OnInit {

  process: StoreProcess;
  alteredProcess: StoreProcess = new StoreProcess;
  selectedProcessId: string;
  public processes;
  public processReviews: Review[] = [];
  public allReviews: Review[] = [];


  processId: string;
  submitted = false;
  comment: string;


  constructor(private gateway: GatewayProvider,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.selectedProcessId = this.route.snapshot.paramMap.get('processId');
    this.loadSelectedProcessDetails();

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

    // this.processes = [exampleProcess1, exampleProcess2];
    this.allReviews.push(exampleReview1, exampleReview2, exampleReview3, exampleReview4);
    this.processReviews = this.allReviews.filter(x => x.process_id === parseInt(this.selectedProcessId, 10));

  }

  loadSelectedProcessDetails() {
    // GET localhost:10000/api/store/process/{processId} - returns process with {processid}
    this.gateway.getStoreProcessById(this.selectedProcessId)
      .then((process) => {
        this.process = process;
        this.alteredProcess.processId = this.process.processId;
        this.alteredProcess.processApproverComment = this.process.processApproverComment;
        // console.log(process);
      })
  }

  postComment() {
    // add API calls for updating a comment of a process POST localhost:10000/api/store/process/{processId}/updateApprovalComment
    // console.log(this.alteredProcess.processApproverComment + "  " + this.alteredProcess.processId);

    this.gateway.postStoreProcessComment(this.alteredProcess.processApproverComment, this.alteredProcess.processId.toString());
    this.router.navigate(['/approval']);
  }

  approveStoreProcess() {
    // POST localhost:10000/api/store/process/{processId}/approve - approve process with {processid}
    this.gateway.postStoreProcessApproved(this.selectedProcessId);
    this.router.navigate(['/approval']);
  }

  unapproveStoreProcess() {
    // POST localhost:10000/api/store/process/{processId}/unapprove - unapprove process with {processid}
    this.gateway.postStoreProcessUnapproved(this.selectedProcessId);
    this.router.navigate(['/approval']);
  }


}
