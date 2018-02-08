import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PasswordValidation } from './password-validation';
import { ExtraValidators } from './ExtraValidators';
import * as sha256 from 'sha256';
import { SignupserviceService } from "../signupservice.service";
import { AuthService, SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  phide = true;
  cphide = true;
  rForm: FormGroup;
  user_email: String = '';
  user_name: String = '';
  user_password: String = '';
  user_contact: String = '';
  user_role: String = '';
  p_link: String = '';
  formData = null;
  responseStatus: String = '';
  user: SocialUser;
  loggedIn: boolean;

  constructor(private fb: FormBuilder, private routerService: Router, private service: SignupserviceService, private authService: AuthService) {
    this.validateSignUpForm(this.fb);
  }

  ngOnInit() {

  }

  submitForm() {
    this.user_email = this.rForm.value.email;
    this.user_name = this.rForm.value.name;
    this.user_password = this.rForm.value.pass;
    this.user_contact = this.rForm.value.phone;
    this.user_role = this.rForm.value.role;
    this.p_link = this.rForm.value.url;

    this.service.signUp(this.user_email, this.user_name, this.user_password, this.user_contact, this.user_role, this.p_link)
      .subscribe(data => {
        // console.log(data);
        // console.log('status: '+data._body);
        this.formData = data.json();
        if (data._body === "true") {
          this.success();
        } else {
          this.faliure();
        }
      });

  }

  validateSignUpForm(fb: FormBuilder) {

    this.rForm = fb.group({
      'name': [null, [Validators.required,
      Validators.maxLength(50),
      Validators.pattern("^[a-zA-Z ]+$")]],
      'email': ['', [Validators.required,

      Validators.maxLength(35),
      Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$")]],
      'phone': ['', [Validators.required,
      Validators.maxLength(10),
      Validators.pattern("^[6-9]{1}[0-9]{9}$")]],

      'pass': ['', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)]],
      'confirmPass': ['', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),]],
      'role': ['', [Validators.required]],
      'url': ['', ExtraValidators.conditional(group => group.controls.role.value === 'provider',
        Validators.compose([Validators.required,
        Validators.pattern("^(http:\/\/www\\.|https:\/\/www\\.|http:\/\/|https:\/\/|www.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$")])
      ),
      ]
    }, { validator: PasswordValidation.passwordsShouldMatch });
  }

  navigateToHome() {
    this.rForm.reset();
    this.routerService.navigate(['/home/']);
  }

  navigateToLogin() {
    this.routerService.navigate(['/login/']);
  }

  navigateToSignUp() {
    this.rForm.reset();
    this.routerService.navigate(['/signup/']);
  }

  success() {
    //console.log('success');
    this.responseStatus = 'pass';
    this.rForm.reset();
  }
  faliure() {
    //console.log('fail');
    this.responseStatus = 'fail';
    this.rForm.reset();
  }

  socialSignUpFail() {
    this.authService.signOut();
    this.responseStatus = 'fail';
  }

  googleSignUp() {
    //console.log('Goole Signup clikcked');
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialSignUp();
  }

  fbSignUp() {
    //console.log('Facebook Signup clicked');
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.socialSignUp();
  }

  socialSignUp() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      //console.log(user);
      if (this.user != null) {
        //console.log(this.user.id);
        //console.log(this.user.name);
        //console.log(this.user.email);
        this.service.socialSignUp(this.user.id, this.user.name, this.user.email).
          subscribe(data => {
            if (data._body === "true") {
              this.routerService.navigate(['/home/']);
            } else {
              this.socialSignUpFail();
            }
          });
      }
    });

  }

}
