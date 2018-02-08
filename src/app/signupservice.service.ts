import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SignupserviceService {

  constructor(private http: Http) { }

  signUp(user_email, user_name, user_password, user_contact, user_role, p_link): Observable<any> {
    return this.http.post('https://educentralservicedev.azurewebsites.net/EduCentral/signup/',
      { 'userEmail': user_email, 'userName': user_name, 'userPassword': user_password, 'userContact': user_contact, 'userRole': user_role, 'pLink': p_link });
  }

  socialSignUp(social_id,user_name,user_email):Observable<any>{
    return this.http.post('https://educentralservicedev.azurewebsites.net/EduCentral/socialsignup/',
    {'id':social_id,'email':user_email,'name':user_name});
  }

}
