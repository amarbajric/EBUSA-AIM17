// Define all models (i.e. User JSON Structure or Process from process store strucutre as class)


export class Process {
  // define props...
  process_id?: number;
  created_at?: Date;
  price?: number;
  process_description?: string;
  process_name?: string;
  state?: string;
  version?: number;
  u_id?: number;
  creator?: string;
}



export class Review {
  // define props...
  review_id?: number;
  comment?: string;
  is_approved?: number;
  u_id?: number;
  process_id: number;
  approver: number;
  uploader?: string;
  created_at?: Date;
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
