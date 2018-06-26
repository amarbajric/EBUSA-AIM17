import { Component } from '@angular/core';
import {StoreProcess, User} from '../../../models/models';
import {GatewayProvider} from '../../@theme/providers/backend-server/gateway';
import {NbAccessChecker} from '@nebular/security';
import {RoleProvider} from '../../role.provider';


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['dashboard.component.scss'],
  providers: [RoleProvider],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  favoriteProcess: StoreProcess = new StoreProcess();
  bestRatedProcess: StoreProcess = new StoreProcess();
  tabName: any[];
  user: User;
  isUser: boolean;

  tabsApprover: any[] = [
    {
      title: 'My Processes',
      route: '/dashboard/myProcesses',
    },
    {
      title: 'Porcesses in Approval',
      route: '/dashboard/validation',
    },
    {
      title: 'Approved Processes',
      route: '/dashboard/validated',
    },
  ];

  tabs: any[] = [
    {
      title: 'My Processes',
      route: '/dashboard/myProcesses',
    },
  ];

  constructor(private gateway: GatewayProvider, public accessChecker: NbAccessChecker,
              private roleProvider: RoleProvider) {



   }

  OnInit() {
    this.gateway.getUser()
      .then((user) => {
        this.user = user;
         this.roleProvider.getRole().subscribe(role => this.isUser = role === 'USER' )
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
