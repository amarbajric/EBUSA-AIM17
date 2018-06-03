import { Component } from '@angular/core';
import { ProcessStoreService } from '../../processstore.service';
import { ProcessStore } from '../../../models/models';

@Component({
  selector: 'ngx-ProcessStoreSearch',
  templateUrl: './processstore-search.component.html',
})
export class ProcessStoreSearchComponent {
  
  public processes;
  private mockEnabled;
 
  constructor(private _ProcessStoreService: ProcessStoreService) {}

  ngOnInit() {
    this.mockEnabled = true;
    this.getProcesses();
  }
 
  getProcesses() {
    if (!this.mockEnabled) {
      this._ProcessStoreService.getProcesses().subscribe(
         data => {
           this.processes = data;
           console.debug(data)
         },
         err => console.error(err),
         () => console.debug('done loading processes') // TODO remove
       );
    } else {
      console.warn("ProcessStoreSearchComponent: using mocked test data")

      let exampleProcess1 = new ProcessStore()
      exampleProcess1.processId = 1
      exampleProcess1.processName = 'Reiseantrag mit Prozesskommunikation'
      exampleProcess1.processDescription = 'Beispielprozess 1'
      exampleProcess1.processPrice = 12.34
      exampleProcess1.processAverageRating = 4.5
      exampleProcess1.processImageSource = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Business_Process_Modelling_Workflow_Schematic.svg/500px-Business_Process_Modelling_Workflow_Schematic.svg.png'
      exampleProcess1.processCreator = 'Tester'
      
      let exampleProcess2 = new ProcessStore()
      exampleProcess2.processId = 2
      exampleProcess2.processName = 'Reiseantrag mit externem IT-System'
      exampleProcess2.processDescription = 'Beispielprozess 2'
      exampleProcess2.processPrice = 125.34
      exampleProcess2.processAverageRating = 2.5
      exampleProcess2.processImageSource = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Business_life_business_model.pdf/page1-800px-Business_life_business_model.pdf.jpg'
      exampleProcess2.processCreator = 'Tester'
      
      let exampleProcess3 = new ProcessStore()
      exampleProcess3.processId = 3
      exampleProcess3.processName = 'Travel Management Buchungsprozess'
      exampleProcess3.processDescription = 'Beispielprozess 3'
      exampleProcess3.processPrice = 4.99
      exampleProcess3.processAverageRating = 1.264
      exampleProcess3.processImageSource = 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Approvals.jpg'
      exampleProcess3.processCreator = 'Tester'

      this.processes = [exampleProcess1, exampleProcess3, exampleProcess2]
    }

  }

}
