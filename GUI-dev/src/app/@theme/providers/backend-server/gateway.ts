import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfigProvider} from './serverconfig';
import {User, StoreProcess, StoreProcessRating} from '../../../../models/models';


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

  getStoreProcesses(filterType: string, filterInput: string): Promise<StoreProcess[]> {
    let filterParams = new HttpParams();
    if (filterType && filterType !== 'none' && filterInput) {
      filterParams = filterParams.append('filterType', filterType);
      filterParams = filterParams.append('filterInput', filterInput);
    }
    return this.http.get<StoreProcess[]>(this.serverConfig.getStoreProcesses, { params: filterParams })
      .toPromise()
  }

  getStoreProcessRatings(processId: string): Promise<StoreProcessRating[]> {
    const params = new HttpParams();
    params.append('processId', processId)
    return this.http.get<StoreProcessRating[]>(this.serverConfig.getStoreProcessRatings, { params: params })
      .toPromise()
  }

  postStoreProcessRatings(processId: string, rating: StoreProcessRating): void {
    const url = this.serverConfig.postStoreProcessRating + '/' + processId
    this.http.post<StoreProcessRating>(url, rating).toPromise()
  }
}
