import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from "@angular/http";

@Injectable()
export class DashboardproviderserviceService {



  constructor(private http: Http) { }
  getCourse(userId): Observable<any> {
    return this.http.post('https://educentralservicedev.azurewebsites.net/EduCentral/get/providerCourse',
      {
        'userId': userId
      });
  }
  addCourse(userId, courseName, coursePrice: number, courseDesc, courseDuration, imgUrl, courseUrl, noOfLectures: number, level, category): Observable<any> {
    return this.http.post('https://educentralservicedev.azurewebsites.net/EduCentral/add/course',
      {
        'courseProvider': userId,
        'courseName': courseName,
        'coursePrice': coursePrice,
        'courseDescription': courseDesc,
        'courseDuration': courseDuration,
        'courseImageUrl': imgUrl,
        'courseUrl': courseUrl,
        'noOfLectures': noOfLectures,
        'levelName': level,
        'category': category
      });

  }
}
