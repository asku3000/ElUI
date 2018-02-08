import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SearchService } from '../search.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  name:string;
  searche:string;
  member:any='';
  found:boolean=true;
  inlen:number=0;
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  description:string = '';
  sname:string = '';
  titleAlert:string = 'This field is required';
  starter:boolean=true;


  constructor(private httpClient:HttpClient,private searches:SearchService,private fb: FormBuilder){ 


    this.rForm = fb.group({
      'description': [null, Validators.compose([Validators.required,Validators.pattern("[A-Za-z.][0-9]*((?!([/,?,%,&,=,\\\\])).)*"),Validators.minLength(1), Validators.maxLength(30)])],
    });



    this.found = false;
    this.httpClient.get(`https://educentralservicedev.azurewebsites.net/EduCentral/search/`)
    .subscribe(
      (data:any[]) => {
        // console.log(data);
        
        if(data.length!=0) {
          this.member= data;
          this.found = true;
        }
      }
    )
   

   }

   

 ngOnInit() {
this.searches.cast.subscribe(searche=> this.searche=searche);
     
    
  }

  addPost(post) {
    this.description = post.description;
    
  }


//  console.log(data);

  

  search(){
    
this.searches.putsearch(this.name);


   }
 ns(){
   this.starter=false;
   if(this.name.length==0){
  this.starter=true;
   }
  console.log(this.name.length);
 }


 
}
