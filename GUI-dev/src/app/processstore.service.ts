import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class ProcessStoreService {

    
  restApi = window.location.protocol + "//" + window.location.hostname + ":10000/api";
 
    constructor(private http:HttpClient) {}
 
    getProcesses() {
        return this.http.get(this.restApi+'/store/processes');
    }
}

