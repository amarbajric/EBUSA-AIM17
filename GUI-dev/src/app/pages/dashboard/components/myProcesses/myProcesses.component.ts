import { Component,  OnInit } from '@angular/core';
import {ProcessesService} from '../../../../allProcesses.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-my-processes',
  styleUrls: ['myProcesses.component.scss'],
  templateUrl:  './myProcesses.html',
})
export class MyProcessesComponent implements OnInit  {

  /*
  myProcesses: [
    {
      piId: number,
      startTime: number[],
      processName: string,
      startUserId: number,
    }
  ];*/
  myProcesses = [];
  error = undefined;
  msg = undefined;

  constructor(protected service: ProcessesService, protected route: ActivatedRoute, protected router: Router) {
    //this.myProcesses = [{"piId":1, "startTime": [8], "processName": "Günther", "startUserId": 12}];
  }

  ngOnInit() {
    const that = this;
    this.service.getProcessModels()
      .subscribe(
        data => {
          that.myProcesses = JSON.parse(data['_body']);
        },
        err => that.error = err,
      );
  }

  /*showProcess(piId: number) {
    this.router.navigate(['../mine', piId], { relativeTo: this.route });
  }*/
}
