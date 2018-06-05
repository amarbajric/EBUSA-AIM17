import { Component,  OnInit } from '@angular/core';
import {ProcessesService} from '../../../../allProcesses.service';
import { Router, ActivatedRoute } from '@angular/router';
import {NbSpinnerService} from '@nebular/theme';

@Component({
  selector: 'ngx-active-processes',
  styleUrls: [],
  templateUrl:  './activeProcesses.html',
})
export class ActiveProcessesComponent implements OnInit  {

  activeProcesses: [
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
    this.service.getActiveProcesses()
    .subscribe(
        data => {
          that.activeProcesses = JSON.parse(data['_body']);
          that.spinner.clear();
        },
        err => {
          that.msg = {text: err, type: 'error'}
          // console.log(err);
          that.spinner.clear();
        },
      );
  }

  showProcess(piId: number) {
    this.router.navigate(['../active', piId], { relativeTo: this.route });
  }

  stopProcess(piId: number) {
    this.service.stopProcess(piId)
    .subscribe(
        data => {
          this.ngOnInit();
        },
        err => {
          this.msg = {text: err, type: 'error'}
          // console.log(err);
        },
      );
  }
}
