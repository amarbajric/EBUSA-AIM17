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

  // gets a process by its Id
  getProcessById (processId: string): Promise<StoreProcess> {
    return this.http.get<StoreProcess>(this.serverConfig.getProcess + processId)
      .toPromise()
  }

  // adds a process to an organization
  addProcessToOrganization (processId: string, orgId: string, uid: string): Promise<StoreProcess> {
    return this.http.post<StoreProcess>(this.serverConfig.getProcess + processId + '/buy',
                                        {'orgaId': orgId, 'userId': uid})
      .toPromise()
  }

  // get all processes of an organization
  getProcessesByOrgId (orgId: string): Promise<StoreProcess[]> {
    return this.http.get<StoreProcess[]>(this.serverConfig.getOrgProcesses + orgId)
      .toPromise()
  }

  getStoreProcesses(): Promise<StoreProcess[]> {
    return this.http.get<StoreProcess[]>(this.serverConfig.getStoreProcesses)
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
