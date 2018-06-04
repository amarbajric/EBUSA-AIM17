import { Component,  OnInit } from '@angular/core';
import { NbSpinnerService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import {ProcessesService} from '../../../../allProcesses.service';

@Component({
  selector: 'ngx-terminated-processes',
  styleUrls: [],
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

  constructor(protected service: ProcessesService, protected spinner: NbSpinnerService, protected route: ActivatedRoute,
              protected router: Router) {
  }

  ngOnInit() {
    const that = this;
    this.spinner.load();
    this.service.getTerminatedProcesses()
    .subscribe(
        data => {
          that.terminatedProcesses = JSON.parse(data['_body']);
          that.spinner.clear();
        },
        err => {
          that.msg = {text: err, type: 'error'}
          // console.log(err);
          that.spinner.clear();
        },
      );
  }
}
