// Define all models (i.e. User JSON Structure or Process from process store strucutre as class)


export class Process {
  // define props...
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
