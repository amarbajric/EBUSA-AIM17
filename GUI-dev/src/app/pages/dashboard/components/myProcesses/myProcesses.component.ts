import { Component,  OnInit } from '@angular/core';
import {ProcessesService} from '../../../../allProcesses.service';
import { Router, ActivatedRoute } from '@angular/router';
import {GatewayProvider} from "../../../../@theme/providers/backend-server/gateway";
import {User} from "../../../../../models/models";
import {ModalComponent} from "../modal/modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreateOrgaModalComponent} from "../createOrgaModal/createOrgaModal.component";


@Component({
  selector: 'ngx-my-processes',
  styleUrls: ['myProcesses.component.scss'],
  templateUrl:  './myProcesses.html',
})
export class MyProcessesComponent implements OnInit  {


  myProcesses;
  user: User;
  inOrganization: boolean = false;

  constructor(protected service: ProcessesService, protected route: ActivatedRoute, protected router: Router, private gateway: GatewayProvider, private modalService: NgbModal) {


  }

  ngOnInit() {
    this.gateway.getUser()
      .then((user) => {
        this.user = user;
        if(user.organization !== null)
        {
          this.inOrganization = true;
        }
      })

    // console.log(this.user);
    this.getProcesses();
  }


  getProcesses() {
    this.gateway.getUserProcesses()
      .then((processes) => {
        this.myProcesses = processes;
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

  openCreateOrganization()
  {
    const createOrgaModal = this.modalService.open(CreateOrgaModalComponent, { size: 'lg', container: 'nb-layout' });
  }

  /*showProcess(piId: number) {
    this.router.navigate(['../mine', piId], { relativeTo: this.route });
  }*/
}
