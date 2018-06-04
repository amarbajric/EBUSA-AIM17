import { Component,  OnInit } from '@angular/core';
import {ProcessesService} from "../../../../allProcesses.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'activeProcesses',
  styleUrls: [],
  templateUrl:  './activeProcesses.html'
})
export class ActiveProcesses implements OnInit  {

  activeProcesses:[
    {
      piId:number,
      startTime:number[],
      processName:string,
      startUserId:number
    }
  ];
  msg = undefined;

  constructor(protected service: ProcessesService, protected route: ActivatedRoute, protected router: Router) {
  }

  ngOnInit() {
    var that = this;
    this.service.getProcessTasksForUser()
    .subscribe(
        data => {
          that.activeProcesses = JSON.parse(data['_body']);
        },
        err =>{
          that.msg = {text: err, type: 'error'}
          console.log(err);
        }
      );
  }

  showProcess(piId:number){
    this.router.navigate(['../active', piId], { relativeTo: this.route });
  }
}
