import { Component,  OnInit } from '@angular/core';
import {ProcessesService} from '../../../../allProcesses.service';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {GatewayProvider} from "../../../../@theme/providers/backend-server/gateway";
import { ModalComponent } from "../modal/modal.component";
import {StoreProcess} from "../../../../../models/models";


@Component({
  selector: 'ngx-review-processes',
  styleUrls: ['reviewProcesses.component.scss'],
  templateUrl:  './reviewProcesses.html',
})
export class ReviewProcessesComponent implements OnInit  {

  protected reviewProcesses: StoreProcess[];
  selectedProc: StoreProcess;

  constructor(protected service: ProcessesService, protected route: ActivatedRoute, protected router: Router, private modalService: NgbModal, private gateway: GatewayProvider) {
  }

  ngOnInit() {
    this.getProcesses();
  }


  getProcesses() {
    let tempProcesses;
    this.gateway.getNotApprovedProcessesByUser()
      .then((processes) => {
      this.reviewProcesses = processes;
      /* tempProcesses = processes;
      let tempProcesses2 = tempProcesses.filter(proc => {proc.approved === false});
        console.log(tempProcesses2);
        console.log(tempProcesses); */
      })
  }

  showProcessDetails(processId: number, processName: string, processVersion: string, processPrice: number, processCreator: string, processDesc: string)
  {
    // console.log('selected processID: ' + processId);
    // console.log(this.reviewProcesses)

    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    // activeModal.componentInstance.modalProcessId = processId;
    activeModal.componentInstance.modalProcessName = processName;
    activeModal.componentInstance.modalProcessVersion = processVersion;
    activeModal.componentInstance.modalProcessPrice = processPrice;
    activeModal.componentInstance.modalProcessCreator = processCreator;
    activeModal.componentInstance.modalProcessDesc = processDesc;


  }



}
