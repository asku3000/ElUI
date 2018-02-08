import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { DashboardproviderserviceService } from '../dashboardproviderservice.service'

@Component({
  selector: 'app-providerhome',
  templateUrl: './providerhome.component.html',
  styleUrls: ['./providerhome.component.css']
})
export class ProviderhomeComponent implements OnInit {

  providerId;
  listOfCourse;
  listLength;
  providerName;
  rForm: FormGroup;

  constructor(private fb: FormBuilder, private service: DashboardproviderserviceService) {
    this.providerId = localStorage.getItem("userId");
    this.providerName = localStorage.getItem("username").toLowerCase();
    this.validateForm(this.fb);

  }

  ngOnInit() {
    this.getCourseByProviderId();
  }


getDetilsOfCoures(courseId,i){
  console.log(courseId);
  console.log(this.listOfCourse[i]);
}

  getCourseByProviderId() {
    this.service.getCourse(this.providerId).subscribe(data => {

      this.listOfCourse = JSON.parse(data._body);
      this.listLength = this.listOfCourse.length;
    })
  }
  submitForm() {
    console.log(this.rForm.value);
    let category = this.rForm.value.cat;
    let level = this.rForm.value.diff;
    let cname = this.rForm.value.name;
    let price = this.rForm.value.price;
    let duration = this.rForm.value.dur;
    let noOfLect = this.rForm.value.lect;
    let imgUrl = this.rForm.value.img;
    let cUrl = this.rForm.value.url;
    let desc = this.rForm.value.desc;
    this.service.addCourse(this.providerId,cname,price,desc,duration,imgUrl,cUrl,noOfLect,level,category).subscribe(data=>{
      if(data._body)
      {
       alert("Course Added Succesfully");
       this.getCourseByProviderId();
      
      }
       else
       alert("Problem in adding course...Try again after some time..");
      
       
       this.rForm.reset();
   })
  }
  validateForm(fb: FormBuilder) {
    this.rForm = fb.group({
      'cat': [null, [Validators.required]],
      'diff': [null, [Validators.required]],
      'name': ['', [Validators.required,
      Validators.maxLength(25),
      Validators.pattern("^[a-zA-Z0-9#. ]+$")]],
      'price': ['', [Validators.required,Validators.pattern("^[0-9]+$")]],
      'dur': ['', [Validators.required,
      Validators.pattern("^[1-9]{1}[a-zA-Z0-9. ]*$")]],
      'lect': ['', [Validators.required,Validators.pattern("^[1-9]{1}[0-9]*$")]],
      'img': ['', [Validators.required,
      Validators.pattern("^(http\:\/\/|https\:\/\/)?([a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]*$")]],
      'url': ['', [Validators.required,
      Validators.pattern("^(http\:\/\/|https\:\/\/)?([a-z0-9][a-z0-9\-]*\.)+[a-z0-9][a-z0-9\-]*$")]],
      'desc': ['', [Validators.required,
      Validators.maxLength(1000)]]
    });
  }

}

