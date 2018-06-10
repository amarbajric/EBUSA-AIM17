import { Component,  OnInit } from '@angular/core';
import {ProcessesService} from '../../../../allProcesses.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-terminated-processes',
  styles: [],
  templateUrl:  './terminatedProcesses.html',
})
export class TerminatedProcessesComponent implements OnInit  {

  terminatedProcesses: [
    {
      piId: number,
      startTime: number[],
      processName: string,
      startUserId: number,
    }
  ];
  msg = undefined;

  constructor(protected service: ProcessesService, protected route: ActivatedRoute, protected router: Router) {
  }

  ngOnInit() {
    const that = this;

    this.service.getTerminatedProcessesForUser()
    .subscribe(
        data => {
          that.terminatedProcesses = JSON.parse(data['_body']);

        },
        err => {
          that.msg = {text: err, type: 'error'}
          // console.log(err);
        },
      );
  }
}
