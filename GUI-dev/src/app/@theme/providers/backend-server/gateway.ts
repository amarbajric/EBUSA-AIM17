import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfigProvider} from './serverconfig';
import {User} from "../../../../models/models";


@Injectable()
export class GatewayProvider {

  constructor(public http: HttpClient, public serverConfig: ServerConfigProvider) {
  }

  /**
   * EXAMPLE: Here we can define all methods which are connecting the frontend to the backend
   * i.e. => getAllProcesses or saveNewProcess or searchForProcess etc...
   */
  /*getAllProcesses = (): Promise<Array<any>> =>
    this.http.get<Array<any>>(null, {})
      .toPromise()
      .then(processes => processes);
  */

  // gets the current user
  getUser (): Promise<User> {
    return this.http.get<User>(this.serverConfig.getUser)
      .toPromise()
  }

  //test for current user
  getUser2 () {
    this.http.get(this.serverConfig.getUser)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      )
  }

}
