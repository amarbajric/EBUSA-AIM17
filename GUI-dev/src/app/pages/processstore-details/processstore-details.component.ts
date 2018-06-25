import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StoreProcess} from '../../../models/models';
import {GatewayProvider} from '../../@theme/providers/backend-server/gateway';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'ngx-processstore-details',
  templateUrl: './processstore-details.component.html',
  styleUrls: ['./processstore-details.component.scss'],
})
export class ProcessStoreDetailsComponent implements OnInit {

  processId: string;
  process: StoreProcess = new StoreProcess;

  constructor(private route: ActivatedRoute,
              private gateway: GatewayProvider,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    // get the ID from the selected process
    this.route.params.subscribe(params => {
      this.processId = params['processId'];
    });

    // get the process details with the ID
    this.gateway.getProcessById(this.processId)
      .then((process) => {
        this.process = process;
      })
  }

  showBuyModal() {
    /*
    const activeModal = this.modalService.open(ModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = 'Warning!';
    activeModal.componentInstance.modalContent = 'Do you really want to buy the process?';
    */
  }

  // buys the process / adds it to the organization
  buyProcess() {
    /*
    this.gateway.addProcessToCompany(this.processId)
      .then((process) => {
        this.process = process;
      })
    */
    console.log("pressed buy");
  }
}
