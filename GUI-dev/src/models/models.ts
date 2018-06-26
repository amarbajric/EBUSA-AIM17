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

export class StoreProcess {
  processId: number;
  processName: string;
  processDescription: string;
  processCreator: string;
  processCreatedAt: Date;
  processVersion: number;
  processPrice: number;

  processApprovedDate: Date;
  processApprover: string;

  processAverageRating: number;
  processApproved: boolean;
  processApproverComment: string;
}

export class StoreProcessRating {
  ratingId: number;
  rating: number;
  comment: string;
  createdBy: string;
  createdAt: Date;
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
  uid: number;
  createdAt: Date;
  organization?: Organization;
  roles: [Role];
  public getUid() {
    return this.uid;
  };
}

export class Organization {
  organizationName: string;
  description: string;
  oid: number;
}

export class Role {
  roleId: number;
  name: string;
  systemId: string;
  rules: [Rule];
}

export class Rule {
  ruleId: number;
  name: string;
  systemId: string;
}


// response interface used for async-email-response
export interface MailAsyncValidationRes {
  isTaken: boolean
}

