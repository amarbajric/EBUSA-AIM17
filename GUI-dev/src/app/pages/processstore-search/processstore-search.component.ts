import {Component, OnInit} from '@angular/core';
import { GatewayProvider } from '../../@theme/providers/backend-server/gateway';

@Component({
  selector: 'ngx-process-store-search',
  templateUrl: './processstore-search.component.html',
  styleUrls: ['./processstore-search.component.scss'],
})
export class ProcessStoreSearchComponent implements OnInit {

  public processes;
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
      this.gateway.getStoreProcesses()
      .then((processes) => {
        this.processes = processes;
      })
    } else {
      console.warn('ProcessStoreSearchComponent: using mocked test data, filtering NOT supported')
    }

  }

}
