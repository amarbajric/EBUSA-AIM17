import { Component,  OnInit } from '@angular/core';
import {ProcessesService} from '../../../../allProcesses.service';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import {GatewayProvider} from '../../../../@theme/providers/backend-server/gateway';
import {User} from '../../../../../models/models';
import {ModalComponent} from '../modal/modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateOrgaModalComponent} from '../createOrgaModal/createOrgaModal.component';
import {Toast, ToasterConfig, ToasterService} from 'angular2-toaster';


@Component({
  selector: 'ngx-my-processes',
  styleUrls: ['myProcesses.component.scss'],
  providers: [ToasterService],
  templateUrl:  './myProcesses.html',
})
export class MyProcessesComponent implements OnInit  {


  myProcesses;
  user: User;
  inOrganization: boolean = false;
  config: ToasterConfig;
  navigationSubscription;

  constructor(protected service: ProcessesService, protected route: ActivatedRoute, protected router: Router,
              private gateway: GatewayProvider, private modalService: NgbModal,
              private toasterService: ToasterService) {

    this.config = new ToasterConfig({
      positionClass: 'toast-top-right',
      newestOnTop: true ,
      tapToDismiss: true,
      preventDuplicates: false,
      animation: 'slidedown',
      limit: 2,
    });

   /* this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseComponents();
      }
    });*/
  }

  initialiseComponents() {
    // Set default values and re-fetch any data you need.
  }

  ngOnInit() {
    this.gateway.getUser()
      .then((user) => {
        this.user = user;
        if (user.organization !== null) {
          this.inOrganization = true;
        }
      })

    this.getProcesses();
  }


  getProcesses() {
    this.gateway.getUserProcesses()
      .then((processes) => {
        this.myProcesses = processes;
      })

  }

  showProcessDetails(processId: number, processName: string, processVersion: string, processPrice: number,
                     processCreator: string, processDesc: string) {


    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalProcessName = processName;
    activeModal.componentInstance.modalProcessVersion = processVersion;
    activeModal.componentInstance.modalProcessPrice = processPrice;
    activeModal.componentInstance.modalProcessCreator = processCreator;
    activeModal.componentInstance.modalProcessDesc = processDesc;


  }

  openCreateOrganization() {
    const createOrgaModal = this.modalService.open(CreateOrgaModalComponent,
      { size: 'lg', container: 'nb-layout' });
    createOrgaModal.componentInstance.saved.subscribe(() => {
      this.createToast();
      /*if (this.navigationSubscription) {
        this.navigationSubscription.unsubscribe();
      }*/
    })
  }

  public createToast() {
    const toast: Toast = {
      type: 'success',
      title: 'Success',
      body: 'Die Organisation wurde erfolgreich gespeichert!',
    };
    this.toasterService.popAsync(toast)
  }


}