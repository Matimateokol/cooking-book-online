import { NgModule } from "@angular/core";
import { RootLayoutComponent } from "./components/root-layout/root-layout.component";
import { RouterLinkActive, RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { NavbarComponent } from "src/app/core/components/navbar/navbar.component";
import { SearchBarComponent } from "src/app/core/components/navbar/search-bar/search-bar.component";
import { CommonModule, NgForOf, } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    RootLayoutComponent,
    NavbarComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLinkWithHref,
    NgForOf,
    MatIconModule,
  ],

  exports: [
    RootLayoutComponent,
  ]
})
export class CoreModule {

}
