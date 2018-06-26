import {Component, OnInit} from '@angular/core';
import { GatewayProvider } from '../../@theme/providers/backend-server/gateway';
import {StoreProcess} from '../../../models/models';
import {Router} from '@angular/router';
import {NbAuthJWTToken, NbAuthService} from '@nebular/auth';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  public processes: StoreProcess[] = [];
  public processesByDate;
  public processesByRating;

  user = {};
  authenticated = false;
  limit = 5;

  constructor(private gateway: GatewayProvider, private router: Router, private authService: NbAuthService, private app: AppComponent) {

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

    this.app.setTitle('Welcome');
    this.getProcesses()
      .then((processArray) => {
        this.processes = processArray;
        this.sortProcessesByDate(processArray);
        this.sortProcessesByRating(processArray);
      })
  }

  getProcesses(): Promise<Array<StoreProcess>> {
    return this.gateway.getStoreProcesses()
      .then((processes) => {
        return processes
      });
  }

  sortProcessesByDate(processArray) {
    this.processesByDate = processArray.sort((a, b) => {
      return b.processApprovedDate - a.processApprovedDate;
    }).slice(0, this.limit);
  }

  sortProcessesByRating(processArray) {
    this.gateway.getAverageRating('1').then(
      (a) => console.log(a)
    )
    //this.processesByRating = processArray
  }

  showDetails(processId) {
    this.router.navigate(['/processstore-details/', processId]);
  }

}
