import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthService} from "../../authentication/service/auth.service";
import {Router} from "@angular/router";

export interface FormConfig {
  title: string;
  buttonText: string;
  isSignIn: boolean;
  fields: {
    label: string;
    name: string;
    type: string;
    required: boolean;
  }[];
}

@Component({
  selector: 'taste-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  @Input() config!: FormConfig;
  @Output() formSubmit = new EventEmitter<any>();
  formData: any = {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if(this.config.isSignIn) {
      this.authService.login(this.formData.email, this.formData.password)
        .subscribe({
          next: res => {
            localStorage.setItem('token', res.token);
            this.router.navigate([''])
          },
          error: (error) => console.log(error)
        });
    } else if (!this.config.isSignIn) {
      this.authService.register(this.formData.firstName, this.formData.lastName, this.formData.email, this.formData.password)
        .subscribe({
          next: () => console.log("Registered successfully")
        });
    }
  }

}
