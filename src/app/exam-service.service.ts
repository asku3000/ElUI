import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExamServiceService {

  examStatus:Boolean;

  questionUrl = 'https://educentralservicedev.azurewebsites.net/EduCentral/getquestion/';
  answerUrl = 'https://educentralservicedev.azurewebsites.net/EduCentral/getanswer/';

  constructor(private httpClient: HttpClient) { }

  getQuestionsFromJson():Observable<any> {
    return this.httpClient.get(this.questionUrl);
  }

  getAnswersFromJson(): Observable<any> {
    return this.httpClient.get(this.answerUrl);
  }

  addPerformance(user_id,certificate_id,user_score): Observable<any>{
    return this.httpClient.post('https://educentralservicedev.azurewebsites.net/EduCentral//certificate/addPerformance',
    {'userId':user_id,'certificateId':certificate_id,'score':user_score});
  }

  getExamStatus():Boolean{
    return this.examStatus;
  }

  setExamStatus(examStatus:Boolean){
    this.examStatus=examStatus;
  }

}
