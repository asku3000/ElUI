import { Injectable } from '@angular/core';
import { UserCertificate } from './exam/user-certificate';

@Injectable()
export class UserCertificateServiceService {

  userCertficate=new UserCertificate();

  constructor() { }

  getUserCertificate(){
    return this.userCertficate;
  }

  setUsercertificate(userCertficate:UserCertificate){
    this.userCertficate=userCertficate;
  }

}
