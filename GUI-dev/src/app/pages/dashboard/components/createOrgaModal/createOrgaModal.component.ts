import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {StoreProcess} from "../../../../../models/models";
import {GatewayProvider} from "../../../../@theme/providers/backend-server/gateway";

@Component({
  selector: 'ngx-create-orga-modal',
  template: `
    <div class="modal-header">
      <span>Neue Organisation erstellen</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div  class="flex-column text-body">
      <dl>
        <dt>Organisationsname:</dt>
        <dd>hier</dd>

        <dt>Beschreibung:</dt>
        <dd>hier</dd>
      </dl>
    </div>
    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="closeModal()">Abbrechen</button>
      <button class="btn btn-md btn-primary" (click)="saveModal()">Speichern</button>
    </div>
  `,
})
export class CreateOrgaModalComponent {



  constructor(private activeModal: NgbActiveModal, private gateway: GatewayProvider) {

  }

  closeModal() {
    this.activeModal.close();
  }

  saveModal() {
    this.activeModal.close();
  }


}
