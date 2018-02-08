import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PasswordValidation } from './password-validation';
import { DashboarduserserviceService } from "../dashboarduserservice.service";

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  phide = true;
  cphide = true;
  nhide = true;
  rForm: FormGroup;
  userId;
  passmsg;
  name;
  email;
  contact;
  role;
  listOfCertificate:any[];
  listLength=0;
  plink;
  constructor(private fb: FormBuilder, private routerService: Router, private service: DashboarduserserviceService) {
    this.validateChangePasswordForm(this.fb);
    this.userId = localStorage.getItem("userId");
    this.name=localStorage.getItem("username");
    this.email=localStorage.getItem("email");
    this.contact=localStorage.getItem("contact");
    this.role=localStorage.getItem("role");
    this.plink=localStorage.getItem('plink');
  }
  ngOnInit() {
    this.getCertificatesByUserId();
    
  }

  validateChangePasswordForm(fb: FormBuilder) {

    this.rForm = fb.group({
      'pass': ['', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)]],
      'newpass': ['', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)]],
      'confirmPass': ['', [Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),]],
    }, { validator: PasswordValidation.passwordsShouldMatch });
  }

  submitForm() {
    //console.log(this.rForm.value);
    //console.log(this.userId);
    this.service.changePassword(this.userId, this.rForm.value.pass, this.rForm.value.newpass)
      .subscribe(data => {
        //console.log(data);
        //console.log(data._body)
        this.passmsg = JSON.parse(data._body);
        //console.log(this.passmsg.status);
        if (this.passmsg.status === true)
        {
          alert("Password Changed");
          
          
        }

        else
          alert("Incorrect Current Password");
        this.rForm.reset();
        
      });

  }
  getCertificatesByUserId(){
    this.service.getCertificate(this.userId).subscribe(data=>{

      this.listOfCertificate=JSON.parse(data._body);
      this.listLength=this.listOfCertificate.length;
      console.log(this.listLength);
    })
  }


  takeTest(){
    this.routerService.navigate(['/certificatesearch']);
  }

  navigateToDash()
  {
    this.routerService.navigate(['/dashboardprovider']);
  }
}
