import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProcessesService} from "../../../../allProcesses.service";

@Component({
  selector: 'models',
  styleUrls: [],
  templateUrl: './processModels.html'
})
export class ProcessModels implements OnInit {
   processModels = [];
   error = undefined;

  constructor(protected service:ProcessesService) {}

  ngOnInit(): void {
    var that = this;
    this.service.getProcessModels()
      .subscribe(
         data => {
            that.processModels = JSON.parse(data['_body']);
         },
         err => that.error = err
       );
  }

  deleteProcessModel(pmId:number):void {
    // not implemented
  }
}
