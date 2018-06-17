import { Component,  OnInit } from '@angular/core';
import {ProcessesService} from '../../../../allProcesses.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-active-processes',
  styleUrls: ['validationProcesses.component.scss'],
  templateUrl:  './validationProcesses.html',
})
export class ActiveProcessesComponent implements OnInit  {

  validationProcesses: [
    {
      piId: number,
      startTime: number[],
      processName: string,
      startUserId: number,
    }
  ];
  msg = undefined;

  constructor(protected service: ProcessesService, protected route: ActivatedRoute, protected router: Router) {

    this.validationProcesses = [{"piId":1, "startTime": [8], "processName": "Günther", "startUserId": 12}];
  }

  ngOnInit() {
    const that = this;
    this.service.getProcessTasksForUser()
    .subscribe(
        data => {
          that.validationProcesses = JSON.parse(data['_body']);
        },
        err => {
          that.msg = {text: err, type: 'error'}
          // console.log(err);
        },
      );
  }

  showProcess(piId: number) {
    this.router.navigate(['../active', piId], { relativeTo: this.route });
  }
}
