import { Component } from '@angular/core';
import {StoreProcess, User} from "../../../models/models";
import {GatewayProvider} from "../../@theme/providers/backend-server/gateway";


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  favoriteProcess: StoreProcess;

  constructor(private gateway: GatewayProvider){

}

  ngOnInit() {
    this.getFavoriteProcesses();
  }

  tabs: any[] = [
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


  getFavoriteProcesses() {
    let tempProcesses;
    this.gateway.getApprovedProcessesByUser()
      .then((processes) => {
        this.favoriteProcess = processes[0];

      })
  }


}
