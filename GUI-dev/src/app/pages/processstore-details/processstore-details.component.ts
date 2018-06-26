import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StoreProcess} from '../../../models/models';
import {GatewayProvider} from '../../@theme/providers/backend-server/gateway';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProcessstoreDetailsModalComponent} from './modal/processstore-details.modal';

@Component({
  selector: 'ngx-processstore-details',
  templateUrl: './processstore-details.component.html',
  styleUrls: ['./processstore-details.component.scss'],
})
export class ProcessStoreDetailsComponent implements OnInit {

  uid;
  orgId;
  processId;
  process: StoreProcess = new StoreProcess;
  processesOfOrg: StoreProcess[];
  hasProcess = false;
  isConfigured = false;

  constructor(private route: ActivatedRoute,
              private gateway: GatewayProvider,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    // get the ID from the selected process
    this.route.params.subscribe(params => {
      this.processId = params['processId'];
    });

    // get the process details with the Id
    this.gateway.getProcessById(this.processId)
      .then((process) => {
        this.process = process;
      });

    // the the oid of the current user
    this.gateway.getUser()
      .then((user) => {
        this.uid = user.uid;
        this.orgId = user.organization.oid.toString();
      })
      .then(() => {
        // get organization processes
        this.gateway.getProcessesByOrgId(this.orgId)
          .then((processes) => {
            this.processesOfOrg = processes;
          })
          .then(() => {
            if (this.processesOfOrg.filter((process) => process.processId == this.processId).length === 1) {
              this.hasProcess = true;
              this.isConfigured = true;
            }
          })
      });
  }

  // activates a modal for approval of payment
  // method for buy can be found in the modal
  showBuyModal() {
    const activeModal = this.modalService.open(ProcessstoreDetailsModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = 'Attention!';
    activeModal.componentInstance.modalContent = 'Do you really want to buy the process?';
    activeModal.componentInstance.buy.subscribe(() => {this.buyProcess()});
  }

  // buys the process / adds it to the organization
  buyProcess() {
    this.gateway.addProcessToOrganization(this.processId, this.orgId, this.uid)
      .then(() => {
        window.location.reload();
      })
      .catch(err => console.warn(err))
  }

  // configuring the process
  // TODO: implement configure process
  configureProcess() {
    // console.log("configure process");
  }

  // starting the process
  // TODO: implement start process
  startProcess() {
    // console.log("process started");
  }
}
