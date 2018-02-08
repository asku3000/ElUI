import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from "@angular/http";

@Injectable()
export class DashboarduserserviceService {

  constructor(private http:Http) { }

  changePassword(userId,oldPass,newPass): Observable<any>{
    return this.http.put('https://educentralservicedev.azurewebsites.net/EduCentral/user/changepass',
    {
      'userId': userId,
    'oldPass':oldPass,
    'newPass':newPass});
  }


  getCertificate(userId): Observable<any>{
    return this.http.post('https://educentralservicedev.azurewebsites.net/EduCentral/get/userCertificate',
    {
      'userId': userId
    });
  }

  getUserDetails(userId): Observable<any>{
    return this.http.post('https://educentralservicedev.azurewebsites.net/EduCentral/get/userDetails',
    {
      'userId': userId
    });
  }

}
