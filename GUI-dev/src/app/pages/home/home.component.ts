import {Component, OnInit} from '@angular/core';
import { GatewayProvider } from '../../@theme/providers/backend-server/gateway';
import {StoreProcess} from '../../../models/models';
import {Router} from '@angular/router';
import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public processes;
  public processesByDate;
  private filterType = 'none';
  private filterInput;

  user = {};
  authenticated = false;
  limit = 5;

  constructor(private gateway: GatewayProvider, private router: Router, private authService: NbAuthService) {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.user = token.getPayload();
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
      })


  }

  ngOnInit() {
    this.getProcesses().then((processArray) => {
      this.processes = processArray;
      this.sortProcessesByDate(processArray);
    })
  }

  getProcesses(): Promise<Array<StoreProcess>> {
    return this.gateway.getStoreProcesses(this.filterType, this.filterInput)
      .then((processes) => processes);
  }

  sortProcessesByDate(processeArray) {
    this.processesByDate = processeArray.sort((a, b) => {
      return b.processApprovedDate - a.processApprovedDate;
    }).slice(0, this.limit);
  }

  showDetails(processId) {
    this.router.navigate(['/processstore-details/', processId]);
  }

}
