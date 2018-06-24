import { Component } from '@angular/core';
import {StoreProcess, User} from "../../../models/models";
import {GatewayProvider} from "../../@theme/providers/backend-server/gateway";
import {NbAccessChecker} from "@nebular/security";


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  favoriteProcess: StoreProcess;
  bestRatedProcess: StoreProcess;
  tabName: any[];
  user: User;

  tabsApprover: any[] = [
    {
      title: 'Meine Prozesse',
      route: '/dashboard/myProcesses',
    },
    {
      title: 'Prozesse in Validierung',
      route: '/dashboard/validation',
    },
    {
      title: 'Validierte Prozesse',
      route: '/dashboard/validated',
    },
  ];

  tabs: any[] = [
    {
      title: 'Meine Prozesse',
      route: '/dashboard/myProcesses',
    },
  ];

  constructor(private gateway: GatewayProvider, public accessChecker: NbAccessChecker){


/*
    this.gateway.getUser()
      .then((user) => {
        this.user = user;
      })

    accessChecker.isGranted('validation', 'USER').subscribe((result: boolean) => {console.log(result);
      result == true ? this.tabName = this.tabsApprover : this.tabName = this.tabs;
    })

*/
   }

  ngOnInit() {
    this.getFavoriteProcesses();
    this.getBestRatedProcesses();
  }




  getFavoriteProcesses() {
    this.gateway.getApprovedProcessesByUser()
      .then((processes) => {
        this.favoriteProcess = processes[0];

      })
  }

  getBestRatedProcesses() {
    this.gateway.getApprovedProcessesByUser()
      .then((processes) => {
        this.bestRatedProcess = processes[1];
      })
  }


}
