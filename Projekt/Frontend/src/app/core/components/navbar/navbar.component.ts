import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "src/app/modules/authentication/service/auth.service";
import {NavbarMenuItems} from "src/app/core/components/navbar/menu-items";
import {UserDto} from "../../api/models/user-dto";

@Component({
  selector: 'taste-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() currentUser!: UserDto;
  public _menuItems = NavbarMenuItems;

  public constructor (
    private router: Router,
    private authService: AuthService,
  ) {

  }

  protected handleSignOff() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  public navigateToLandingPage() {
    this.router.navigate(['/posts']);
  }
}
