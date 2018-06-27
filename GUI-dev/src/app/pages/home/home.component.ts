import {Component, OnInit} from '@angular/core';
import { GatewayProvider } from '../../@theme/providers/backend-server/gateway';
import {AverageRating, StoreProcess} from '../../../models/models';
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
  public processesByDate: StoreProcess[] = [];
  public processesByRating: StoreProcess[] = [];
  public ratings: AverageRating[] = [];

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
    const processes: StoreProcess[] = [];
    Promise.all(processArray.map(
      (process) => this.gateway.getAverageRating(process.processId).then(
      (average) => {
        this.ratings.push(average);
        processes.push(process);
      },
      ))).then(
      () => {
      const combination = this.ratings.map((rating, i) => {
        return [rating.averageRating, processes[i]]
      });
        combination.sort((a, b) => {
          if (a[0] === b[0]) {
            return 0;
          } else {
            return (a[0] < b[0] ? -1 : 1)
          }
        });
        for (const element of combination) {
          // shows as an error but works ...
          this.processesByRating.push(element[1]);
        }

        this.processesByRating = this.processesByRating.slice(0, this.limit);
        this.ratings.sort((a, b) => a.averageRating - b.averageRating)
      })
  }

  showDetails(processId) {
    this.router.navigate(['/processstore-details/', processId]);
  }

}
