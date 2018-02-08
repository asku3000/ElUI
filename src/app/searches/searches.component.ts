import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../search.service';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.css']
})
export class SearchesComponent {
  starter:boolean=true;
  name:string;
  member:any='';
  searche:string;
  found:boolean;
  formData:any;
  inlen:string;
   rForm: FormGroup;
  post:any;                     // A property for our submitted form
  description:string = '';
  sname:string = '';
  filterss:string;
  isloading:boolean=true;

  beg:string='';
  inte:string='';
  exp:string='';
  dev:string='';
  busi:string='';
  pddd:string='';
  mark:string='';

  //level checkbox
  beginner:boolean;
  intermediate:boolean;
  expert:boolean;

  //price radio
  pFrom:string='0';
  pTo:string='999999';

  //category checkbox
  development:boolean;
  business:boolean;
  pD:boolean;
  marketing:boolean;

  //lecture radio
  lFrom:string='0';
  lTo:string='999999';

  //sort radio
  hl:string;

  constructor(private httpClient:HttpClient,private searches:SearchService,private fb: FormBuilder) {
    //this.name = event.target.value;
    
    this.rForm = fb.group({
      'description': [null, Validators.compose([Validators.required,Validators.pattern("[A-Za-z.][0-9]*((?!([/,?,%,&,=,\\\\])).)*"),Validators.minLength(1), Validators.maxLength(30)])],
    });
    this.found = true;
  //  this.filterData=this.beginner;
  }
 

 ngOnInit(){
     this.searches.cast.subscribe(searche=> this.searche=searche);
    //  console.log(this.searche);
     this.search(); 
   }

filters(){
  this.beg='';
  this.inte='';
  this.exp='';
  this.dev='';
  this.busi='';
  this.pddd='';
  this.mark='';
   if(this.beginner){
    this.beg="beginner";
   }
   if(this.intermediate){
    this.inte="intermediate";
   }
   if(this.expert){
    this.exp="expert";
   }
   if(this.development){
    this.dev="development";
   }
   if(this.business){
    this.busi="business";
   }
   if(this.pD){
    this.pddd="pD";
   }
   if(this.marketing){
    this.mark="marketing";
   }
    
    this.filterss=`priceh=${this.pTo}&pricel=${this.pFrom}&cat='${this.dev}','${this.busi}','${this.pddd}','${this.mark}'&level='${this.beg}','${this.inte}','${this.exp}'&nolhigh=${this.lTo}&nollow=${this.lFrom}&sort=${this.hl}`;

    console.log(this.filterss);
    this.inlen=this.searche;
    this.isloading=true;
    this.httpClient.get(`https://educentralservicedev.azurewebsites.net/EduCentral/search/s=${this.inlen.replace('.','_')}/filters?${this.filterss}`)
    .subscribe(
      (dats:any[]) => {
        // console.log(data);
        if(dats.length!=0) {
          this.isloading=false;
          this.member= dats;
          this.found = true;
          console.log(dats);
        }else{
          this.found = false;
          this.isloading=false;
        console.log(dats);
        }
        

      }
    )



 }

resets(){
//level checkbox
  this.beginner=false;
  this.intermediate=false;
  this.expert=false;

  //price radio
  this.pFrom='0';
  this.pTo='999999';

  //category checkbox
  this.development=false;
  this.business=false;
  this.pD=false;
  this.marketing=false;

  //lecture radio
  this.lFrom='0';
  this.lTo='999999';

  //sort radio
  this.hl='';
 this.search();
  
}


search(){    
this.searches.putsearch(this.searche);
// console.log(this.searche);
     this.inlen=this.searche;
this.isloading=true;
    this.httpClient.get(`https://educentralservicedev.azurewebsites.net/EduCentral/search/s=${this.inlen.replace('.','_')}`)
    .subscribe(
      (data:any[]) => {
        // console.log(data);
        if(data.length!=0) {
          this.isloading=false;
          this.member= data;
          this.found = true;
        }else{
          this.isloading=false;
          this.found = false;
        
        }

      }
    )

//  console.log(this.name);
    
   }

ns(){
   this.starter=false;
   if(this.searche.length==0){
  this.starter=true;
   }
  console.log(this.searche.length);
 }


}
