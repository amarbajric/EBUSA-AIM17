import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StoreProcess} from '../../../models/models';
import {GatewayProvider} from '../../@theme/providers/backend-server/gateway';

@Component({
  selector: 'ngx-processstore-details',
  templateUrl: './processstore-details.component.html',
  styleUrls: ['./processstore-details.component.scss'],
})
export class ProcessStoreDetailsComponent implements OnInit {

  processId: string;
  process: StoreProcess = new StoreProcess;

  constructor(private route: ActivatedRoute,
              private gateway: GatewayProvider) {
  }

  ngOnInit() {
    // get the ID from the selected process
    this.route.params.subscribe(params => {
      this.processId = params['processId'];
    });

    // get the process details with the ID
    this.gateway.getProcessById(this.processId)
      .then((process) => {
        this.process = process;
      })
  }

  // buys the process / adds it to the organization
  buyProcess() {
    // TODO: implement with backend
  }
}
