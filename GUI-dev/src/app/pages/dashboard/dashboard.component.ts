import { Component } from '@angular/core';


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  tabs: any[] = [
    {
      title: 'Meine Prozesse',
      route: '/dashboard/myProcesses',
    },
    {
      title: 'Prozesse in Validierung',
      route: '/dashboard/active',
    },
  ];

}
