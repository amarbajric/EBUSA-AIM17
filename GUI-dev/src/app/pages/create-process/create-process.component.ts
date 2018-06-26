import { Component } from '@angular/core';
import {StoreProcess} from "../../../models/models";
import {GatewayProvider} from "../../@theme/providers/backend-server/gateway";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'ngx-create-process',
  templateUrl: './create-process.component.html',
})
export class CreateProcessComponent {

  process: StoreProcess = new StoreProcess();
  owlFile: File;
  processModelOwl;
  buildedBusinessObjects = {};
  file: File;

  constructor(private gateway: GatewayProvider, private modalService: NgbModal) {

  }



  onFileChange(event) {
    // const that = this;
    this.owlFile = event.srcElement.files[0];
    const split = this.owlFile.name.split('.');
    if (split[split.length - 1] !== 'owl') {
      this.owlFile = undefined;
      event.target.value = '';
    }
    console.log(this.owlFile);
  }


  createProcess(form): void {

        this.gateway.uploadOWLModel(777,this.owlFile)
          .then(()=> console.log('yes')
          ).catch(err => console.log('noch immer net ' + err.toString()));


  }


/*
  createProcess(form): void {


    this.gateway.uploadOWLModel(777, this.owlFile).then(() => console.log('success'))
      .catch(() => console.log('no success'));}
    /*this.gateway.createProcess(this.process).then(() =>
    {
      console.log('now uplaod OWL')
      this.gateway.uploadOWLModel(this.process.processId, this.owlFile).then(() => console.log('success'))
        .catch(() => console.log('no success'));
    })
      .catch(() => console.log('no success'))
  }*/
       /* this.gateway.uploadOWLModel(1, this.owlFile)
          .then(
            data => {
              console.log('uploaded OWL');
              })
          .catch(err => console.log('Die OWL Datei konnte nicht richtig interpretiert werden!'));
        // reader.readAsText(that.owlFile);
      }*/
    //}*/
}
