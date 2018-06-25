import {Component, EventEmitter} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {Organization} from '../../../../../models/models';
import {GatewayProvider} from '../../../../@theme/providers/backend-server/gateway';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'ngx-create-orga-modal',
  providers: [ToasterService],
  styleUrls: ['createOrgaModal.component.scss'],
  template: `
    <div class="modal-header">
      <!-- <toaster-container></toaster-container> -->
      <span>Neue Organisation erstellen</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div  class="flex-column text-body">
      <div class="form-group">
        <br>
        <h6>Organisationsname</h6>
        <input name="organizationName" [(ngModel)]="organization.organizationName" id="input-organizationName"
               #organizationName="ngModel"
               class="form-control" placeholder="Organisationsname"
               >
      </div>
      <div class="form-group">
        <br>
        <h6>Beschreibung</h6>
        <input name="organizationDescription" [(ngModel)]="organization.description" id="input-organizationDescription"
               #organizationDescription="ngModel"
               class="form-control" placeholder="Beschreibung der Organisation"
        >
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-md btn-primary" (click)="closeModal()">Abbrechen</button>
      <button class="btn btn-md btn-primary" (click)="saveModal()">Speichern</button>
    </div>
  `,
})
export class CreateOrgaModalComponent {

  organization: Organization = new Organization;
  saved: EventEmitter<any> = new EventEmitter();


  constructor(private activeModal: NgbActiveModal, private gateway: GatewayProvider) {


  }

  closeModal() {
    this.activeModal.close();
  }

  saveModal = () => this.gateway.createNewOrganisation(this.organization)
    .then(() => {
      this.saved.emit('openPopup');
      this.activeModal.close();
    })
    .catch(
      // console.log("sth. went wrong" + err.message)
    );



}
