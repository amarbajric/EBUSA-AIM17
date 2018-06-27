import {Component, OnInit} from '@angular/core';
import {StoreProcess} from '../../../models/models';
import {GatewayProvider} from '../../@theme/providers/backend-server/gateway';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-create-process',
  templateUrl: './create-process.component.html',
})
export class CreateProcessComponent implements OnInit {

  process: StoreProcess = new StoreProcess();
  creator: string;
  owlFile: File;
  file: File;

  constructor(private gateway: GatewayProvider, private router: Router) {

  }

  ngOnInit() {
    this.gateway.getUser().then(user => this.creator = user.username);
  }


  onFileChange(event) {
    // const that = this;
    this.owlFile = event.srcElement.files[0];
    const split = this.owlFile.name.split('.');
    if (split[split.length - 1] !== 'owl') {
      this.owlFile = undefined;
      event.target.value = '';
    }
  }


  createProcess(form): void {
    this.process.processCreator = this.creator;
    this.gateway.createProcess(this.process)
      .then(data => {this.gateway.uploadOWLModel(data.processId, this.owlFile); })
      .then(data => {this.router.navigateByUrl('/dashboard')});
  }
}
