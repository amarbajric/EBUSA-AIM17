import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modal',
  template: `
    <div class="modal-header">
      <span>{{ modalHeader }}</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{ modalContent }}
    </div>
    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="buyProcess(); closeModal()">Yes</button>
      <button class="btn btn-md btn-primary" (click)="closeModal()">No</button>
    </div>
  `,
})
export class ProcessstoreDetailsModal {

  modalHeader: string;
  modalContent: string;

  constructor(private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }

  // buys the process / adds it to the organization
  // TODO: implement buy process according to backend
  buyProcess() {

    /*
    this.gateway.addProcessToCompany(this.processId)
      .then((process) => {
        this.process = process;
      })
    */
    // console.log('pressed buy);
  }
}
