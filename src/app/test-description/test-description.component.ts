import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CertificateListServiceService } from "../certificate-list-service.service";
import { UserService } from "../user.service";
import { ExamServiceService } from "../exam-service.service";

@Component({
  selector: 'app-test-description',
  templateUrl: './test-description.component.html',
  styleUrls: ['./test-description.component.css']
})
export class TestDescriptionComponent implements OnInit {

  certificates:any = null;
  certificatesLength:number=0;
  id:any='';
  certificateName='';
  username:String='';
  loginStatus:Boolean;
  constructor(private service:CertificateListServiceService, private route: ActivatedRoute, private routerService: Router, private userservice:UserService, private examService:ExamServiceService) {  }

  ngOnInit() {
     this.route.params.forEach((params: Params) => {
      this.id = JSON.parse(params['id']);
    });
    this.getCertificates();
    this.loginStatus=this.userservice.isLoggedIn();
    this.username=localStorage.getItem('username');
    console.log(this.username);
  }

  getCertificates():void{
  
    this.service.getCertificatesFromJson().subscribe(
      data => {
        this.certificates = data;
        this.certificatesLength=this.certificates.length;
      });    
  }

  getCertificateName():String{
    
    for(let i=0;i<this.certificates.length;i++){
      if(this.certificates[i].ceritifcateId===this.id){
        this.certificateName=this.certificates[i].certificateName;
        //console.log(this.certificateName);
      }
    }
    return this.certificateName+' Test';
  }

  navigateToTest(){
    this.examService.setExamStatus(true);
    this.routerService.navigate(['/testStart/'+this.id]);
  }

  navigateToLogIn(){
    this.routerService.navigate(['/login/']);
  }
  

}
