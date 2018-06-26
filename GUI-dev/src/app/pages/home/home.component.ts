import {Component, OnInit} from '@angular/core';
import { GatewayProvider } from '../../@theme/providers/backend-server/gateway';
import {StoreProcess, StoreProcessRating} from '../../../models/models';
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
  public processesWithRating: {[process: number]: number; } = {};
  public processesByRating: StoreProcess[] = [];
  public ratings: string[] = [];
  private filterType = 'none';
  private filterInput;
  public complete: boolean = false;

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

  average(ratings): number {
    let sum = 0;
    ratings.forEach((r) => {
      sum += r.rating ;
    });
    return parseFloat( (sum / ratings.length + 0.000001).toFixed(2) );
  }

  getAverageRatings(process): Promise<number> {
    return this.gateway.getStoreProcessRatings(process)
        .then((ratings) => {
          return this.average(ratings)
        });
  }

  sortProcessesByDate(processArray) {
    this.processesByDate = processArray.sort((a, b) => {
      return b.processApprovedDate - a.processApprovedDate;
    }).slice(0, this.limit);
  }

  sortProcessesByRating(processArray) {
    for (const process of processArray) {
      if (process) {
        this.getAverageRatings(process.processId).then((average) => {
          this.processesWithRating[process.processId] = average;
        }).then(
          () => {
            this.complete = Object.keys(this.processesWithRating).length === this.processes.length
          })
          .then(() => {
            if (this.complete) {
              Object.entries(this.processesWithRating).forEach(
                ([key, value]) => {
                  this.processesByRating.push(this.processes.find((process) => process.processId === parseInt(key, 10)));
                  this.ratings.unshift(value);
                }
              );
              this.processesByRating = this.processesByRating.slice(0, this.limit).reverse()
            }
          })

        }
    }
  }

  showDetails(processId) {
    this.router.navigate(['/processstore-details/', processId]);
  }

}
