import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/do';
import { UserLogin } from './UserLogin';

@Injectable()
export class UserService{
    dataUser
    constructor(private http:HttpClient){}
    getActiveProviders():Observable<UserLogin[]>
    {
          
       return this.http.get<UserLogin[]>('http://localhost:8088/EduCentral/admin/providers')
       .do(
           (data)=>{
             this.dataUser=data;
        }
       );
    }
   
}