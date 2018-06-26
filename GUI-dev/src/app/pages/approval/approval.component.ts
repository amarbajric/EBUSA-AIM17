import {Component, Input, OnInit} from '@angular/core';
import {Process, StoreProcess} from '../../../models/models';
import {Review} from '../../../models/models';
import { GatewayProvider } from '../../@theme/providers/backend-server/gateway';
import {Router} from '@angular/router';


@Component({
  selector: 'ngx-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss'],
})
export class ApprovalComponent implements OnInit {

  @Input() process;
  // public processes: Process[] = [];
  public processes;
  @Input() review: Review;
  public reviews: Review[] = [];
  public selectedProcess: Process;
  public selectedReviews: Review[] = [];


  settings = {
    columns: {
      processId: {
        title: 'ID',
      },
      processName: {
        title: 'Process Name',
      },
      processDescription: {
        title: 'Description',
      },
      processCreator: {
        title: 'Creator',
      },
      processApproved: {
        title: 'Is Approved',
      },
    },
    actions: false,
  };

  data: StoreProcess[] = [];


  constructor(private gateway: GatewayProvider, private router: Router) {

  }

  ngOnInit() {
    this.getUnapprovedProcesses();
    this.getAllProcesses();
    // this.getUnapprovedProcesses();
  }

  getUnapprovedProcesses() {
      this.gateway.getUnapprovedStoreProcesses()
        .then((processes) => {
        // this.processes = processes;
        // this.data = processes;
        // console.log(this.data);
        })
  }

  getAllProcesses() {
    this.gateway.getStoreProcesses().then((processes) => {
      this.processes = processes;
      // console.log(processes);
      this.data = processes;
      // console.log(this.data)
    })
  }

  loadDetails(processId: number) {

    this.router.navigate(['/approval-details/', processId])

  }

  onUserRowSelect(event): void {
    // console.log(event.data.processId);
    this.loadDetails(event.data.processId);
    // this.loadDetails(processId);
  }

}
