// Define all models (i.e. User JSON Structure or Process from process store strucutre as class)


export class Process {
  // define props...
}

export class ProcessStore {
  processId: number;
  processName: string;
  processDescription: string;
  processCreator: string;
  processCreatedAt: Date;
  processVersion: number;
  processPrice: number;
  // missing in current ProcessStoreDTO in backend:
  processImageSource: string;
  processAverageRating: number;
}


export class User {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}


// response interface used for async-email-response
export interface MailAsyncValidationRes {
  isTaken: boolean
}
