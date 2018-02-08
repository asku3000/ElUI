import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCertificate } from './../exam/user-certificate';
import { UserCertificateServiceService } from "../user-certificate-service.service";
@Component({
  selector: 'app-user-certificate',
  templateUrl: './user-certificate.component.html',
  styleUrls: ['./user-certificate.component.css']
})
export class UserCertificateComponent implements OnInit {

  userCertificate = new UserCertificate();
  userName: String = '';
  userPercentage: number;
  userCertificateName: String;
  userSubmittedResponse: any;
  dateNow: Date = new Date();

  constructor(private userCertificateService: UserCertificateServiceService, private routerService: Router) {

  }

  ngOnInit() {
    this.userCertificate = this.userCertificateService.getUserCertificate();
    this.userName = this.userCertificate.getUserName();
    this.userPercentage = this.userCertificate.getUserPercentage();
    this.userCertificateName = this.userCertificate.getUserCertificateName();
  }

  navigateToProfile() {
    this.routerService.navigate(['/dashboarduser/']);
  }

}
