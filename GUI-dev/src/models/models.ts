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
<<<<<<< HEAD
  uid: number;
  createdAt: Date;
  organization?: Organization;
  roles: [Role];

  public getUid() {
    return this.uid;
  }

=======
  createdAt: Date;
  organization?: Organization;
  roles: [Role];
>>>>>>> refs/remotes/origin/user-details-#51
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
<<<<<<< HEAD

=======
>>>>>>> refs/remotes/origin/user-details-#51
}


// response interface used for async-email-response
export interface MailAsyncValidationRes {
  isTaken: boolean
}

