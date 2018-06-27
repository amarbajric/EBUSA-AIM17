import {Component, OnInit} from '@angular/core';
import { GatewayProvider } from '../../@theme/providers/backend-server/gateway';
import {StoreProcess} from '../../../models/models';

@Component({
  selector: 'ngx-process-store-search',
  templateUrl: './processstore-search.component.html',
  styleUrls: ['./processstore-search.component.scss'],
})
export class ProcessStoreSearchComponent implements OnInit {

  public processes: Array<StoreProcess>;
  private mockEnabled;
  // tslint:disable-next-line
  private filterType = 'none'; // is used in html
  // tslint:disable-next-line
  private filterInput; // is used in html

  constructor(private gateway: GatewayProvider) {}

  ngOnInit() {
    this.mockEnabled = false;
    this.getProcesses();
  }

  getProcesses() {
    if (!this.mockEnabled) {
      this.gateway.getApprovedStoreProcesses()
      .then((processes) => {
        this.processes = processes;
      })
      .then(() => this.setRatings())
    } else {
      console.warn('ProcessStoreSearchComponent: using mocked test data, filtering NOT supported')
    }

  }


  setRatings() {
    this.processes.map(process => {
      this.gateway.getAverageRating(process.processId).then(avgRating =>
        process.processAverageRating = avgRating.averageRating)
    })
  }

}
