import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ServerConfigProvider} from './serverconfig';
import {User, StoreProcess, StoreProcessRating, Organization} from '../../../../models/models';


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


  /* getUserProcesses(userId: number): Promise<StoreProcess[]> {
    return this.http.get<StoreProcess[]>(this.serverConfig.getUserProcesses + '/' + userId, )
      .toPromise()
  } */


  getApprovedProcessesByUser(): Promise<StoreProcess[]> {
    return this.http.get<StoreProcess[]>(this.serverConfig.getApprovedProcessesByUser)
      .toPromise()
  }

  getNotApprovedProcessesByUser(): Promise<StoreProcess[]> {
    return this.http.get<StoreProcess[]>(this.serverConfig.getNotApprovedProcessesByUser)
      .toPromise()
  }

  createNewOrganisation(organization: Organization): Promise<Organization>  {
    return this.http.post<Organization>(this.serverConfig.createOrganizaion,
      {'organizationName': organization.organizationName, 'organizationDescription': organization.description})
      .toPromise();
  }


  getUserProcesses(): Promise<StoreProcess[]> {
    return this.http.get<StoreProcess[]>(this.serverConfig.getStoreProcesses)
      .toPromise()
  }

  getProcessById(processId: number): Promise<StoreProcess> {
    return this.http.get<StoreProcess>(this.serverConfig.getProcessById + '/' + processId)
      .toPromise()
  }

/*
  getStoreProcesses(filterType: string, filterInput: string): Promise<StoreProcess[]> {
    let filterParams = new HttpParams();
    if (filterType && filterType !== 'none' && filterInput) {
      filterParams = filterParams.append('filterType', filterType);
      filterParams = filterParams.append('filterInput', filterInput);
    }
    return this.http.get<StoreProcess[]>(this.serverConfig.getStoreProcesses, { params: filterParams })
      .toPromise()

  }
  */

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
