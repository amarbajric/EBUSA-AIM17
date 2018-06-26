import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {StoreProcess} from '../../../../../models/models';
import {GatewayProvider} from '../../../../@theme/providers/backend-server/gateway';

@Component({
  selector: 'ngx-modal',
  template: `
    <div class="modal-header">
      <span>{{ modalProcessName }}</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <b>Description:</b>{{modalProcessDesc}}
      <br>
      <b>Version:</b> {{modalProcessVersion}}
      <br>
      <b>Creator:</b> {{modalProcessCreator}}
      <br>
      <b>Price:</b> {{modalProcessPrice}}
    </div>
    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="closeModal()">OK</button>
    </div>
  `,
})
export class ModalComponent {

  selectedProcess: StoreProcess;
  modalHeader: string;
  modalProcessId: number;
  modalProcessVersion: number;
  modalProcessDesc: string;
  modalProcessCreator: string;
  modalProcessPrice: number;
  modalProcessName: string;

  constructor(private activeModal: NgbActiveModal, private gateway: GatewayProvider) {

  }

  closeModal() {
    this.activeModal.close();
  }


  getProcessDetails() {
    this.gateway.getProcessById('' + this.modalProcessId)
      .then((process) => {
        this.selectedProcess = process;

      })

  }
}
