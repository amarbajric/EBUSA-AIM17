import {Component} from '@angular/core';
import {Organization, User} from '../../../models/models';
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
      })
  }

  // check if user has an organization
  private checkUserData() {
    if (!this.user.organization) {
      const organization: Organization = new Organization();
      organization.organizationName = 'no organization';
      this.user.organization = organization;
    }
  }
}
