import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StoreProcess} from '../../../models/models';
import {GatewayProvider} from '../../@theme/providers/backend-server/gateway';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ProcessstoreDetailsModalComponent} from './modal/processstore-details.modal';
import {ProcessesService} from '../../allProcesses.service';

@Component({
  selector: 'ngx-processstore-details',
  templateUrl: './processstore-details.component.html',
  styleUrls: ['./processstore-details.component.scss'],
})
export class ProcessStoreDetailsComponent implements OnInit {

  orgId: string;
  processId: string;
  process: StoreProcess = new StoreProcess;
  processesOfOrg: string[] = ['1', '2'];
  confProcesses;
  hasProcess = false;
  isConfigured = false;

  constructor(private route: ActivatedRoute,
              private gateway: GatewayProvider,
              private modalService: NgbModal,
              private processService: ProcessesService) {
  }

  ngOnInit() {
    // get the ID from the selected process
    this.route.params.subscribe(params => {
      this.processId = params['processId'];
    });

    // the the oid of the current user
    this.gateway.getUser()
      .then((user) => {
        this.orgId = user.organization.oid.toString();
      });

    // get organization processes
    /*
    this.gateway.getProgcessesByOrgId(this.orgId)
      .then((processes) => {
        this.processesOfOr = processes;
      });
    */

    // get the process details with the ID
    this.gateway.getProcessById(this.processId)
      .then((process) => {
        this.process = process;
      });

    this.confProcesses = this.processService.getProcessModels();

    // TODO: Überprüfen ob entsprechende ProcesssID vorhanden
    if(this.processesOfOrg.filter((pid) => pid == this.processId).length == 1) {
      this.hasProcess = true;
      this.isConfigured = true;

      // TODO: check if process is configured
      /*
      if(this.confProcesses) {
        this.isConfigured = true;
      }
      */
    }
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
    // console.log("pressed buy");

    this.gateway.addProcessToOrganization(this.processId, this.orgId)
      .then(() => {
        console.log("added process to organization");
      })
      .catch(err =>
        console.log("error: " + err)
      );
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
