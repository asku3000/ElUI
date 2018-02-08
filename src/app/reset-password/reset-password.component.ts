import { UserEmailValidators } from './../userEmail.Validators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserServicesService } from "../user-services.service";
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  user;
  email;
  user_id;
  details;
  user_email;
  user_pass;

  myform: FormGroup;


  constructor(fb: FormBuilder, private route: ActivatedRoute, private userService: UserServicesService, private routerService: Router) {
    this.myform = fb.group({
      user_id: [''],
      user_password: ['',
        [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      user_confPass: ['',
        [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    }, { validator: UserEmailValidators.passwordsShouldMatch });
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.user = JSON.parse(params['id']);
     
      this.user_id = this.user.userId;
     
    });
  }
  get user_password() {

    return this.myform.get('user_password');
  }

  get user_confPass() {

    return this.myform.get('user_confPass');
  }

  changePassword() {
    if (this.myform.value.user_password != "") {
      this.myform.value.user_id = this.user;
      this.user_id = this.myform.value.user_id;

      this.user_pass = this.myform.value.user_password;
      
      this.userService.savePassword(this.user_id, this.user_pass)
        .subscribe(data => {
          
          this.successful();

        });

    }else{
      this.routerService.navigate(['/home']);
    }

  }

  successful() {
    alert("Password Change successful");
    this.routerService.navigate(['/home']);
  }

  cancel(){
    this.routerService.navigate(['/home']);
  }


}
