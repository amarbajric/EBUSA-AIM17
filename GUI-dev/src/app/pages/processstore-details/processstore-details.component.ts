import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-processstore-details',
  templateUrl: './processstore-details.component.html',
  styleUrls: ['./processstore-details.component.scss'],
})
export class ProcessStoreDetailsComponent implements OnInit {

  processId: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.processId = this.route.snapshot.paramMap.get('processId');
  }

}
