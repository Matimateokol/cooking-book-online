import { Component } from '@angular/core';
import { UserDto } from "../../../core/api/models/user-dto";
import { AuthService } from "../../authentication/service/auth.service";

@Component({
  selector: 'tasty-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  public _user: UserDto | undefined;

  public constructor (
    private authService: AuthService,
  ) {
    this.authService.user$.subscribe(user => {
      this._user = user;
      console.log(this._user);
    })
  }
}
