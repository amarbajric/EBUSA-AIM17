import {Component, OnInit} from '@angular/core';
import {NbAuthJWTToken, NbAuthService} from "@nebular/auth";
import {User} from "../../../models/models";
import {GatewayProvider} from "../../@theme/providers/backend-server/gateway";

@Component({
  selector: 'ngx-user-details',
  templateUrl: './user-details.component.html',
})
export class UserDetailsComponent {

  /*
  user: User = new User();
  userId: string = "";

  constructor (private authService: NbAuthService,
               private gateway: GatewayProvider
               ) {

    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          this.userId = token.getPayload().userId;
        }
      });

    this.gateway.getUser(this.userId)
      .then((retUser) =>
        this.user = retUser
      )
  }
  */
}
