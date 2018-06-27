import { Component,  OnInit } from '@angular/core';
import {ProcessesService} from '../../../../allProcesses.service';
import { Router, ActivatedRoute } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GatewayProvider} from '../../../../@theme/providers/backend-server/gateway';
import { ModalComponent } from '../modal/modal.component';
import {StoreProcess, User} from '../../../../../models/models';


@Component({
  selector: 'ngx-validated-processes',
  styleUrls: ['validatedProcesses.component.scss'],
  templateUrl:  './validatedProcesses.html',
})
export class ValidatedProcessesComponent implements OnInit  {
  validationProcesses: StoreProcess[];
  user: User;
  inOrganization: boolean = false;
  orgaId: number;

  constructor(protected service: ProcessesService, protected route: ActivatedRoute, protected router: Router,
              private modalService: NgbModal, private gateway: GatewayProvider) {
  }

  ngOnInit() {
    this.gateway.getUser()
      .then((user) => {
        this.user = user;
        if (user.organization !== null) {
          this.inOrganization = true;
          if (this.inOrganization === true) {
            this.orgaId = user.organization.oid;
          }
        }
      })
    this.getProcesses();
  }


  getProcesses() {
    this.inOrganization = false;
    this.gateway.getUser()
      .then((user) => {
        this.user = user;
        if (user.organization !== null) {
          this.inOrganization = true;
          if (this.inOrganization === true) {
            this.orgaId = user.organization.oid;
            if (this.inOrganization === true) {
              this.gateway.getProcessesByOrgId('' + user.organization.oid)
                .then((processes) => {
                  // this.validationProcesses = processes.filter(proc => {proc.approved === true});
                  this.validationProcesses = processes.filter(proc => proc.processApproved);
                })
            }
          }
        }
      })
  }

  showProcessDetails(processId: number, processName: string, processVersion: string, processPrice: number,
                     processCreator: string, processDesc: string) {
    // console.log('selected processID: ' + processId);
    // console.log(this.validationProcesses)

    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    // activeModal.componentInstance.modalProcessId = processId;
    activeModal.componentInstance.modalProcessName = processName;
    activeModal.componentInstance.modalProcessVersion = processVersion;
    activeModal.componentInstance.modalProcessPrice = processPrice;
    activeModal.componentInstance.modalProcessCreator = processCreator;
    activeModal.componentInstance.modalProcessDesc = processDesc;


  }



}
