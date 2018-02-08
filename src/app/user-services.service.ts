
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class UserServicesService {
value = false;
  constructor(private http:Http) { }

  checkValidEmail(user_email): Observable<any>{
    return this.http.post('https://educentralservicedev.azurewebsites.net/EduCentral/isUserPresent',{'userEmail': user_email});
  }

  resendotp(user_id): Observable<any>{
    return this.http.post('https://educentralservicedev.azurewebsites.net/EduCentral/resendotp',{'userId': user_id});
  }

  checkValidOTP(user_id,user_otp) :Observable<any>{
    return this.http.post('https://educentralservicedev.azurewebsites.net/EduCentral/isOTPcorrect',{'userId':user_id,'userOtp':user_otp});
  }

  savePassword(user_id,user_password) : Observable<any>{
    return this.http.post('https://educentralservicedev.azurewebsites.net/EduCentral/savePassword',{'userId':user_id,'userPassword':user_password});
  }

 
  }


