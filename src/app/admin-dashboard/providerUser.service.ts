import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import {UserLogin} from './UserLogin';
import 'rxjs/add/operator/do';

@Injectable()
export class ProviderUserService{
    dataUserActive;
    dataUserDeActive;
    data:any;
    activeUsers;
    constructor(private http:HttpClient){}
    getActiveProviders():Observable<UserLogin[]>
    {
          
       return this.http.get<UserLogin[]>('https://educentralservicedev.azurewebsites.net/EduCentral/admin/activeProviders')
       .do(
           (data)=>{
             this.dataUserActive=data;

             this.getNoOfActiveUsers();
              this.activeUsers=this.dataUserActive.length;
            //   console.log(this.activeUsers);
       }
       );
      
    }
    getNoOfActiveUsers()
    {
        
    }
     getDeActiveProviders():Observable<UserLogin[]>
    {
          
       return this.http.get<UserLogin[]>('https://educentralservicedev.azurewebsites.net/EduCentral/admin/deactiveProviders')
       .do(
           (datas)=>{
             this.dataUserDeActive=datas;
            //  console.log(this.dataUserDeActive)
       }
       );
    }
    // deleteProvider(activeProviders)
    // {     
    //       this.data=activeProviders.userId;
    //     console.log(this.data) 
    //     return this.http.get(`http://localhost:8089/EduCentral/admin/deleteProvider?id=${this.data}`).do(data=>
    //     {
    //         this.data
    //         console.log("executed");
    //     })   ;


       
    // }
   
}