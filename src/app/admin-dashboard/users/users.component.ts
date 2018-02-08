import { Component, OnInit } from '@angular/core';
import { UserService } from "../../user.service";
import { UserLogin } from "../UserLogin";
import { ProviderUserService } from "../providerUser.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    id: any;
    data: any;
    activeProviders: any;
activeUsers:UserLogin[];
deactiveUsers:UserLogin[];


  constructor(private user:ProviderUserService,private http:HttpClient) { }

  ngOnInit() {
    this.getActiveProviders();
    this.getDeActiveProviders();
  }
  getActiveProviders()
  {
    this.user.getActiveProviders().subscribe((users)=>{
       this.activeUsers= users;   
      //  console.log(this.activeUsers)
   });
  }
    getDeActiveProviders()
  {
    // console.log("deactive providers")
    this.user.getDeActiveProviders().subscribe((users)=>{
       this.deactiveUsers= users;   
      //  console.log(this.deactiveUsers.length)
   });
   
  
  }
 deleteProvider(activeProvider)
 {
    
    this.id=activeProvider.userId;
     
     return this.http.get(`https://educentralservicedev.azurewebsites.net/EduCentral/admin/deleteProvider?id=${this.id}`).subscribe(data=>{
            this.data=data;
            // console.log(this.data)
              this.getActiveProviders();
    this.getDeActiveProviders();
     });
    
 }
 addProvider(deactiveProvider)
 {
    
   console.log("in deactive")
    this.id=deactiveProvider.userId;
     console.log(this.id)
     return this.http.get(`https://educentralservicedev.azurewebsites.net/EduCentral/admin/addProvider?id=${this.id}`).subscribe(data=>{
            this.data=data;
            // console.log(this.data)
             this.getActiveProviders();
    this.getDeActiveProviders();
     });
     
 }
}
