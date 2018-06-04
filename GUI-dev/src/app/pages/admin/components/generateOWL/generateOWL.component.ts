import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { EventLoggerService} from '../../../../evntLogger.service';

@Component({
  selector: 'ngx-import',
  styleUrls: ['./generateOWL.scss'],
  templateUrl: './generateOWL.html',
})
export class GenerateOWLComponent implements OnInit {
   error = undefined;
   pnmlFiles = [{id: 1, name: '', file: undefined}, {id: 2, name: '', file: undefined}];
   processName = '';

  constructor(protected service: EventLoggerService) {}

  ngOnInit(): void {
  }

  onPNMLFileChange(event, id) {
    const that = this;
    let pnmlFile = that.pnmlFiles.filter(x => x.id === id)[0];
    pnmlFile.file = event.srcElement.files[0];
    const split = pnmlFile.file.name.split('.');
    if (split[split.length - 1] !== 'pnml') {
      pnmlFile = undefined;
      event.target.value = '';
    }
  }

  uploadFiles(form): void {
    const that = this;
    const newFileName = that.processName + '-generated.owl';
    const fileResults = {}
    const fileReaderPromises = [];
    that.pnmlFiles.forEach(p => {
      if (!p.name || p.name === '' || !p.file) {
        return;
      }
      const promise = new Promise((resolve, reject) => {
        const pnmlReader = new FileReader();
        pnmlReader.onload = (e) => {
          fileResults[p.name] = pnmlReader.result;
          resolve();
        }
        pnmlReader.readAsText(p.file)
      });
      fileReaderPromises.push(promise);
    });
    Promise.all(fileReaderPromises).then(result => {
      that.service.generateOWL(that.processName, fileResults)
      .subscribe(
          data => {
            that.saveData(data, newFileName);
            that.error = undefined;
          },
          err => {
            that.error = 'Die OWL Datei konnte nicht generiert werden! ' + JSON.parse(err._body).message;
          },
        );
    })
  }

  isUploadDisabled() {
    const that = this;
    return that.processName === '' ||
      that.processName === undefined ||
      that.pnmlFiles[0].name === '' ||
      that.pnmlFiles[0].name === undefined ||
      that.pnmlFiles[0].file === undefined ||
      that.pnmlFiles[1].name === '' ||
      that.pnmlFiles[1].name === undefined ||
      that.pnmlFiles[1].file === undefined ||
      that.pnmlFiles[0].name === that.pnmlFiles[1].name
  }

  saveData(data, fileName) {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.cssText = 'display: none';
    const blob = new Blob([data._body], {type: 'application/xml'});
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}
