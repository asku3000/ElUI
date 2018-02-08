import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserEmailValidators } from '../userEmail.Validators'
import { ValueComponent } from "../value/value.component";
import { Router } from '@angular/router';
import { UserServicesService } from '../user-services.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  validateEmail;
  myEmail: any;
  isUser;
  error = false;
  user_id;
  constructor(private value: ValueComponent, private routerService: Router, private userService: UserServicesService) { }

  myform = new FormGroup({

    user_email: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
      Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"),
      UserEmailValidators.cannotContainSpace,

    ],

    )



  });

  get user_email() {

    return this.myform.get('user_email');
  }

  checkEmail() {
    this.myEmail = this.myform.value.user_email;
    this.userService.checkValidEmail(this.myEmail)
      .subscribe(
      data => {

        this.isUser = data.json();


        this.checkUser(this.isUser);

      });

  }

  checkUser(usr) {
    if (usr.userEmail != null) {
      this.user_id = usr.userId;

      this.routerService.navigate(['/verifyOTP/' + this.user_id]);
    } else {
      this.error = true;




    }
  }



  ngOnInit() {
  }

}
