import {Component} from '@angular/core';
import {Organization, Role, User} from '../../../models/models';
import {GatewayProvider} from '../../@theme/providers/backend-server/gateway';

@Component({
  selector: 'ngx-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {

  user: User = new User();

  constructor (private gateway: GatewayProvider) {

    // get the user information
    this.gateway.getUser()
      .then((user) => {
        this.user = user;
        this.checkUserData();

        // call for test data
        // TODO: delete
        this.generateTestData();
      })
  }

  // generates test data
  // TODO: to be deleted
  private generateTestData() {
    if (!this.user.createdAt) {
      this.user.createdAt = new Date();
    }

    const role1: Role = new Role();
    role1.roleId = 1;
    role1.name = 'User';
    const role2: Role = new Role();
    role2.roleId = 2;
    role2.name = 'Admin';

    this.user.roles[0] = role1;
    this.user.roles[1] = role2;
  }

  private checkUserData() {
    if (!this.user.organization) {
      const organization: Organization = new Organization();
      organization.organizationName = 'no organization';
      this.user.organization = organization;
    }
  }
}
