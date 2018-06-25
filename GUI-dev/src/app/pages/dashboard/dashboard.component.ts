import { Component } from '@angular/core';
import {StoreProcess, User} from "../../../models/models";
import {GatewayProvider} from "../../@theme/providers/backend-server/gateway";
import {NbAccessChecker} from "@nebular/security";
import {RoleProvider} from "../../role.provider";
import {ToasterService} from "angular2-toaster";


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['dashboard.component.scss'],
  providers: [RoleProvider],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  favoriteProcess: StoreProcess;
  bestRatedProcess: StoreProcess;
  tabName: any[];
  user: User;
  isUser: boolean;

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

  constructor(private gateway: GatewayProvider, public accessChecker: NbAccessChecker, private roleProvider: RoleProvider){



   }

  ngOnInit() {
    this.gateway.getUser()
      .then((user) => {
        this.user = user;
        // this.roleProvider.getRole().subscribe(role => this.isUser = role === 'SYS_ADMIN' )
        this.roleProvider.getRole().subscribe(role => {
          if (role === 'SYS_ADMIN' || role === 'USER' || role === 'SYS_APPROVER')
          {
            this.isUser = true;
          }
        } )
        console.log('allowed: '+ this.isUser);
      })



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
