import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from "@angular/common/http";
import { Location } from "@angular/common";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserEmailValidators } from "../userEmail.Validators";
import { User } from './user';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [name: string]: any;
  username: FormControl;
  password: FormControl;
  loginForm: FormGroup;
  currentUser: User;
  checked: boolean = false;
  checkedStatus: boolean = false;
  result;
  error = false;
  returnUrl;
  user: SocialUser;
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private userService: UserService, private authService: AuthService, private location: Location) { }

  ngOnInit() {


    this.createFormControls();
    this.createForm();

  }
  createFormControls() {
    this.username = new FormControl('', [
      UserEmailValidators.cannotContainSpace,

      Validators.required,
      Validators.pattern("[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}")
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.pattern("^[a-z0-9_-]{8,15}$")
    ]);
  }
  createForm() {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password


    })
  }
  signInWithGoogle(): void {

    this.authService.authState.subscribe((user) => {
      this.user = user;

    })

    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.onSubmit();



  }

  signInWithFB(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;

    })

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.onSubmit();
  }
  onSubmit() {
    // console.log(this.user)
    if (this.user) {

      var data = {
        "userEmail": this.user.email,
        "userPassword": this.user.id,

      }
    }
    else {
      data = {
        "userEmail": this.loginForm.value.username,
        "userPassword": this.loginForm.value.password
      }
    }


    var post = this.http.post('https://educentralservicedev.azurewebsites.net/EduCentral/loginform/register', data).subscribe((list) => {

      this.result = list;

      // console.log(this.result);
      if (this.result.length == 0) {
        this.checked = true;
      }

      if (this.result.length != 0) {

        for (let results of this.result) {
          if (results.userRole == 'admin' && results.userStatus == true) {
            this.userService.setRole(results.userRole)
            this.userService.setName(results.userName)
            this.userService.currentUser = this.result;
            // console.log(results.userStatus);
            if (localStorage.getItem("username") || localStorage.getItem("email") || localStorage.getItem("role") || localStorage.getItem("userId")) {
              localStorage.removeItem("username");
              localStorage.removeItem("email");
              localStorage.removeItem("role");
              localStorage.removeItem("userId");
              localStorage.removeItem("contact");

              localStorage.setItem("username", results.userName);
              localStorage.setItem("email", results.userEmail);
              localStorage.setItem("role", results.userRole);
              localStorage.setItem("userId", results.userId);
              localStorage.setItem("contact", results.userContact);

            } else {
              localStorage.setItem("username", results.userName);
              localStorage.setItem("email", results.userEmail);
              localStorage.setItem("role", results.userRole);
              localStorage.setItem("userId", results.userId);
              localStorage.setItem("contact", results.userContact);

            }

            this.router.navigate(['/mydashboardadmin']);
          }

          else if (results.userRole == 'user' && results.userStatus == true) {
            this.userService.setRole(results.userRole)
            this.userService.currentUser = this.result;
            this.userService.setName(results.userName)
            if (localStorage.getItem("username") || localStorage.getItem("email") || localStorage.getItem("role") || localStorage.getItem("userId")) {
              localStorage.removeItem("username");
              localStorage.removeItem("email");
              localStorage.removeItem("role");
              localStorage.removeItem("userId");
              localStorage.removeItem("contact");
              localStorage.setItem("username", results.userName);
              localStorage.setItem("email", results.userEmail);
              localStorage.setItem("role", results.userRole);
              localStorage.setItem("userId", results.userId);
              localStorage.setItem("contact", results.userContact);

            } else {
              localStorage.setItem("username", results.userName);
              localStorage.setItem("email", results.userEmail);
              localStorage.setItem("role", results.userRole);
              localStorage.setItem("userId", results.userId);
              localStorage.setItem("contact", results.userContact);

              this.location.back();
            }

          }


          else if (results.userRole == 'provider' && results.userStatus == true) {
            this.userService.setRole(results.userRole)
            this.userService.currentUser = this.result;
            this.userService.setName(results.userName)
            this.router.navigate(['/dashboardprovider']);

            if (localStorage.getItem("username") || localStorage.getItem("email") || localStorage.getItem("role") || localStorage.getItem("userId")) {
              localStorage.removeItem("username");
              localStorage.removeItem("email");
              localStorage.removeItem("role");
              localStorage.removeItem("userId");
              localStorage.removeItem("contact");
              localStorage.removeItem("plink");
              localStorage.setItem("username", results.userName);
              localStorage.setItem("email", results.userEmail);
              localStorage.setItem("role", results.userRole);
              localStorage.setItem("userId", results.userId);
              localStorage.setItem("contact", results.userContact);
              localStorage.setItem("plink", results.providerLink);
            } else {
              localStorage.setItem("username", results.userName);
              localStorage.setItem("email", results.userEmail);
              localStorage.setItem("role", results.userRole);
              localStorage.setItem("userId", results.userId);
              localStorage.setItem("contact", results.userContact);
              localStorage.setItem("plink", results.providerLink);
            }
          }


          else {
            this.checkedStatus = true;

          }
        }
      }
      else {
        console.log("wrong");
      }
    });
  }

}
