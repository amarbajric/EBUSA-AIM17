import { Component,  OnInit } from '@angular/core';
import {ProcessesService} from '../../../../allProcesses.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-active-processes',
  styleUrls: ['activeProcesses.component.scss'],
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

  constructor(protected service: ProcessesService, protected route: ActivatedRoute, protected router: Router) {

    // this.activeProcesses = [{"piId":1, "startTime": [8], "processName": "Günther", "startUserId": 12}];
  }

  ngOnInit() {
    const that = this;
    this.service.getProcessTasksForUser()
    .subscribe(
        data => {
          that.activeProcesses = JSON.parse(data['_body']);
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
