import {Component, ViewEncapsulation} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';
import { ProcessesService } from '../../../Processes.service';
import { User } from '../../../user';


@Component({
  selector: 'todo',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./todo.scss')],
  template: require('./todo.html')
})
export class Todo {

  public dashboardColors = this._baConfig.get().colors.dashboard;

  public tasks:[
    {
      piId:number,
      processName:string,
      ssId:number,
      stateName:string,
      functionType:string,
      lastChanged:number[]
    }
  ];

  constructor(private _baConfig:BaThemeConfigProvider, private _processService:ProcessesService, protected user:User) {
    this._processService.getProcessTasksForUser(this.user.getUid())
    .subscribe(
        data => {
          this.tasks = JSON.parse(data['_body']);
        },
        err =>{
          console.log(err);
        }
      );
  }
}
