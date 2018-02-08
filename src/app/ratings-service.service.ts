import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class RatingsServiceService {

  constructor(private http:Http) { }

  checkRatings(courseId,userId) :Observable<any>{
    return this.http.post('',{"courseId":courseId,"userId":userId});
  }
  saveRatings(courseId,userId,message,rating,date,time) :Observable<any>{
    return this.http.post('https://educentralservicedev.azurewebsites.net/EduCentral/saveRatingByCourseId',{"message":message,"rating":rating,"date":date,"time":time,"courseId": {"courseId":courseId},"userId" : {"userId":userId}})
  }

  getRatings(courseId) :Observable<any>{
    return this.http.post('https://educentralservicedev.azurewebsites.net/EduCentral/showRatingsByCourseId',{"courseId":courseId})
  }

}
