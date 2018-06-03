import {Component} from '@angular/core';
import {User} from '../../../models/models';
import {GatewayProvider} from '../../@theme/providers/backend-server/gateway';

@Component({
  selector: 'ngx-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent {

  user: User = new User();
  constructor (private gateway: GatewayProvider) {

    this.gateway.getUser()
      .then((user) => {
        this.user = user;
      })
  }
}
