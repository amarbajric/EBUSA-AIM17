import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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


  createProcess(process: StoreProcess): Promise<StoreProcess> {
    return this.http.post<StoreProcess>(this.serverConfig.createProcess, {'processName': process.processName,
      'processDescription': process.processDescription, 'processPrice': process.processPrice}).toPromise()
  }

  uploadOWLModel(processId: number, owlFile: File): Promise<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    const formData: FormData = new FormData();
    formData.append('file', owlFile);
    return this.http.post<any>(this.serverConfig.uploadOWL + processId + '/uploadProcessFile', formData, {'headers': headers}).toPromise()
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
