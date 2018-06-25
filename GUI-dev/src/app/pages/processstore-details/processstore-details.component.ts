import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StoreProcess} from '../../../models/models';
import {GatewayProvider} from '../../@theme/providers/backend-server/gateway';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProcessstoreDetailsModal} from "./modal/processstore-details.modal";

@Component({
  selector: 'ngx-processstore-details',
  templateUrl: './processstore-details.component.html',
  styleUrls: ['./processstore-details.component.scss'],
})
export class ProcessStoreDetailsComponent implements OnInit {

  processId: string;
  process: StoreProcess = new StoreProcess;
  hasProcess = false;
  orgId: string;
  processes;

  constructor(private route: ActivatedRoute,
              private gateway: GatewayProvider,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    // get the ID from the selected process
    this.route.params.subscribe(params => {
      this.processId = params['processId'];
    });

    // get organization processes
    // TODO: get all processes of current logged in user and check if viewed process is available; to show correct button buy or run
    /*
    this.gateway.getProcessesByOrgId(this.orgId)
      .then((processes) => {
        this.processes = processes;
      })
    */

    // get the process details with the ID
    this.gateway.getProcessById(this.processId)
      .then((process) => {
        this.process = process;
      })
  }

  // activates a modal for approval of payment
  // method for buy can be found in the modal
  showBuyModal() {
    const activeModal = this.modalService.open(ProcessstoreDetailsModal, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = 'Attention!';
    activeModal.componentInstance.modalContent = 'Do you really want to buy the process?';
  }

  // starting the process
  // TODO: implement start process
  startProcess(processId: string) {
    console.log("process started")
  }
}
