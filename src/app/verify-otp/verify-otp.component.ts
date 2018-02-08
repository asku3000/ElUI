import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from "../user-services.service";
// import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {
  user;
  user_id;
  myValues;
  email;
  user_email;
  user_OTP;
  isUser;
  error = false;

  constructor(private route: ActivatedRoute, private userService: UserServicesService, private routerService: Router) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.user = JSON.parse(params['id']);
     
      this.user_id = this.user;
      
    });
  }
  
  myform = new FormGroup({
    user_id: new FormControl(),
    user_otp: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern("[0-9]+")
    ]),

  });

  get user_otp() {
    
    return this.myform.get('user_otp');
  }

 

  checkOTP() {
    this.user_OTP = this.myform.value.user_otp;
    this.userService.checkValidOTP(this.user_id, this.user_OTP)
      .subscribe(
      data => {
       

        this.isUser = data.json();
        this.navigator(this.isUser);

      });


  }

  navigator(usr) {
    if (usr.userEmail != null) {
     
      this.routerService.navigate(['/resetPassword/' + usr.userId]);
      
    } else {
      this.error = true;
     
    }

  }

  







  resendOTP() {
    this.userService.resendotp(this.user_id)
      .subscribe(
      data => {
        

        this.isUser = data.json();

        this.checkOTP();
      
      });
  }
  

}




