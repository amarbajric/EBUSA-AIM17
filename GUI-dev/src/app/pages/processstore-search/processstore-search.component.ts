import { Component } from '@angular/core';
import { StoreProcess } from '../../../models/models';
import { GatewayProvider } from '../../@theme/providers/backend-server/gateway';

@Component({
  selector: 'ngx-ProcessStoreSearch',
  templateUrl: './processstore-search.component.html',
  styleUrls: ['./processstore-search.component.scss'],
})
export class ProcessStoreSearchComponent {
  
  public processes;
  private mockEnabled;
  private filterType = 'none';
  private filterInput;

  constructor(private gateway: GatewayProvider) {}

  ngOnInit() {
    this.mockEnabled = false;
    this.getProcesses();
  }
 
  getProcesses() {
    if (!this.mockEnabled) {
      this.gateway.getStoreProcesses(this.filterType, this.filterInput)
      .then((processes) => {
        this.processes = processes;
      })
    } else {
      console.warn("ProcessStoreSearchComponent: using mocked test data, filtering NOT supported")

      let exampleProcess1 = new StoreProcess()
      exampleProcess1.processId = 1
      exampleProcess1.processName = 'Reiseantrag mit Prozesskommunikation'
      exampleProcess1.processDescription = 'Beispielprozess 1'
      exampleProcess1.processPrice = 12.34
      exampleProcess1.processAverageRating = 4.5
      exampleProcess1.processCreator = 'TesterA'
      
      let exampleProcess2 = new StoreProcess()
      exampleProcess2.processId = 2
      exampleProcess2.processName = 'Reiseantrag mit externem IT-System'
      exampleProcess2.processDescription = 'Beispielprozess 2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
      exampleProcess2.processPrice = 125.34
      exampleProcess2.processAverageRating = 2.5
      exampleProcess2.processCreator = 'TesterC'
      
      let exampleProcess3 = new StoreProcess()
      exampleProcess3.processId = 3
      exampleProcess3.processName = 'Travel Management Buchungsprozess'
      exampleProcess3.processDescription = 'Beispielprozess 3 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea taki'
      exampleProcess3.processPrice = 4.99
      exampleProcess3.processAverageRating = 1.264
      exampleProcess3.processCreator = 'TesterB'

      this.processes = [exampleProcess1, exampleProcess3, exampleProcess2]
    }

  }

}
