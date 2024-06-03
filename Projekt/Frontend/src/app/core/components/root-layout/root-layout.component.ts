import { Component } from '@angular/core';
import { AuthService } from "src/app/modules/authentication/service/auth.service";
import { UserDto } from "../../api/models/user-dto";

@Component({
  selector: 'taste-root-layout',
  templateUrl: './root-layout.component.html',
  styleUrls: ['./root-layout.component.scss']
})
export class RootLayoutComponent {
  public currentUser: UserDto | undefined;

  public constructor(
    private readonly _authService: AuthService,
  ) {
    this._authService.user$.subscribe(user => {
      this.currentUser = user;
    })
  }
}
