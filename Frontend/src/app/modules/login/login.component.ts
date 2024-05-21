import {Component} from '@angular/core';import {FormConfig} from "./auth-form/auth-form.component";
@Component({
  selector: 'taste-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  protected isSignUpForm = false;
  protected loginConfig: FormConfig = {
    title: 'Welcome back!',
    buttonText: 'Log In',
    isSignIn: true,
    fields: [
      { label: 'Email', name: 'email', type: 'email', required: true },
      { label: 'Password', name: 'password', type: 'password', required: true }
    ]
  };
  protected registerConfig: FormConfig = {
    title: 'Time to feel like home..',
    buttonText: 'Sign Up',
    isSignIn: false,
    fields: [
      { label: 'firstName', name: 'firstName', type: 'text', required: true },
      { label: 'lastName', name: 'lastName', type: 'text', required: true },
      { label: 'Email', name: 'email', type: 'email', required: true },
      { label: 'Password', name: 'password', type: 'password', required: true }
    ]
  };
}
