import { Component, OnInit } from '@angular/core';
import { GatewayProvider } from '../../@theme/providers/backend-server/gateway';

@Component({
  selector: 'ngx-process-store-search',
  templateUrl: './processstore-search.component.html',
  styleUrls: ['./processstore-search.component.scss'],
})
export class ProcessStoreSearchComponent implements OnInit {

  public processes;
  // tslint:disable-next-line
  private filterType = 'none'; // is used in html
  // tslint:disable-next-line
  private filterInput; // is used in html

  constructor(private gateway: GatewayProvider) { }

  ngOnInit() {
    this.getProcesses();
  }

  /*
  // doesn't work
  getProcesses1() {
    // first get processes
    this.gateway.getStoreProcesses()
      .then((processes) => {
        this.processes = processes;
        // then get ratings
        processes.forEach(function (process) {
          this.gateway.getStoreProcessRatings(process.processId)
            .then((ratings) => {
              // calculate rating per process
              // https://www.jstips.co/en/javascript/array-average-and-median/
              const ratingNumbers = ratings.map(rating => rating.rating)
              const sum = ratingNumbers.reduce((previous, current) => current += previous);
              const avg = sum / ratingNumbers.length;
              process.processAverageRating = avg
            })
        })
      })
  }
  */

  getProcesses() {
    // first get processes
    this.gateway.getStoreProcesses()
      .then((processes) => {
        this.processes = processes;

        // then get ratings
        this.gateway.getAllStoreProcessRatings() // server return error 404
          .then((ratings) => {
            // calculate average ratings
            const avgRatings = this.average(ratings)
            avgRatings.forEach(function (avgRating) {
              // find processes with correct id (should only be 1)
              const processesWithCorrectId = this.processes.filter(process => process.processId === avgRating.processId)
              processesWithCorrectId.forEach(function (process) {
                process.processAverageRating = avgRating.value
              })
            })
          })
      })
  }


  // based on https://stackoverflow.com/a/21819883
  average(arr) {
    const sums = {}, counts = {}, results = []
    let processId
    for (let i = 0; i < arr.length; i++) {
      processId = arr[i].processId;
      if (!(processId in sums)) {
        sums[processId] = 0;
        counts[processId] = 0;
      }
      sums[processId] += arr[i].value;
      counts[processId]++;
    }

    // tslint:disable-next-line
    for (processId in sums) {
      results.push({ processId: processId, value: sums[processId] / counts[processId] });
    }
    return results;
  }

}
