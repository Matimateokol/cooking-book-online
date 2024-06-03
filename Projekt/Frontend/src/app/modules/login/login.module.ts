import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {RouterModule, Routes} from "@angular/router";
import {NgClass, NgForOf} from "@angular/common";
import {AuthFormComponent} from './auth-form/auth-form.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [{
  path: '',
  component: LoginComponent,
}]

@NgModule({
  declarations: [
    LoginComponent,
    AuthFormComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    NgClass,
    NgForOf,
    FormsModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class LoginModule {

}
