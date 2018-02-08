import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExamServiceService } from "../exam-service.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserCertificate } from './user-certificate';
import { UserCertificateServiceService } from "../user-certificate-service.service";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  questions: any = null;
  rForm: FormGroup;
  response: any = '';
  answer: any = '';
  questionLength: number = 0;
  mark: number = 0;
  id: any;
  certificateName = '';
  percentage: number = 0;
  q: any[] = [];
  userCertificate=new UserCertificate();

  constructor(private service: ExamServiceService, private fb: FormBuilder, private route: ActivatedRoute, private routerService: Router, private userCertificateService:UserCertificateServiceService) {
  }

  ngOnInit() {
    if(!this.service.getExamStatus()){
      alert('Your test session has expired. Redirecting to home..');
      setTimeout(()=>{
          this.routerService.navigate(['home']);
      },1000);
    }
    this.route.params.forEach((params: Params) => {
      this.id = JSON.parse(params['id']);
    });
    this.getQuestions();
    this.validate(this.fb);
    this.getAnswer();
  }

  ngOnDestroy() {
    this.service.setExamStatus(false); 
  }

  getQuestions(): any {
    this.service.getQuestionsFromJson().subscribe(
      data => {
        this.questions = data;
        this.questionLength = this.questions.length;
      });
  }

  submitAnswer() {
    let ques = this.rForm.value;
    this.response = this.rForm.value;
    this.mark = this.calsculateScore(this.response);
    this.percentage = this.calculatePercentage(this.mark);
    this.userCertificate.setUserName(localStorage.getItem('username'));
    this.userCertificate.setUserCertificateName(this.getCertificateName());
    this.userCertificate.setUserPercentage(this.percentage);
    this.userCertificate.setUserSubmittedResponse(this.response);
    this.userCertificateService.setUsercertificate(this.userCertificate);
    this.service.addPerformance(localStorage.getItem('userId'),this.id,this.percentage)
    .subscribe(data=>{

    });
    this.rForm.reset();
  }

  getAnswer(): any {
    this.service.getAnswersFromJson().subscribe(
      data => {
        this.answer = data;
      });
  }

  calsculateScore(submittedAnswer: any): number {
    let correctAns = this.answer;
    let count = 0;
    let cId = this.id;
    if (cId == 3) {
      for (let i = 0, j = 1; i < 10 && j < 10; i++ , j++) {
        if (correctAns[i].answer === submittedAnswer[j]) {
          count++;
        }
      }
      if (correctAns[9].answer === submittedAnswer[0]) {
        count++;
      }
    }
    if (cId == 4) {
      for (let i = 10, j = 1; i < 20 && j < 10; i++ , j++) {
        if (correctAns[i].answer === submittedAnswer[j]) {
          count++;
        }
      }
      if (correctAns[19].answer === submittedAnswer[0]) {
        count++;
      }
    }
    if (cId == 5) {
      for (let i = 20, j = 1; i < 30 && j < 10; i++ , j++) {
        if (correctAns[i].answer === submittedAnswer[j]) {
          count++;
        }
      }
      if (correctAns[29].answer === submittedAnswer[0]) {
        count++;
      }
    }
    return count;
  }

  calculatePercentage(score: number): number {
    let percentage = 0;
    percentage = score * 10;
    return percentage;
  }

  validate(fb: FormBuilder) {

    this.rForm = fb.group({
      '1': ['', Validators.required],
      '2': ['', Validators.required],
      '3': ['', Validators.required],
      '4': ['', Validators.required],
      '5': ['', Validators.required],
      '6': ['', Validators.required],
      '7': ['', Validators.required],
      '8': ['', Validators.required],
      '9': ['', Validators.required],
      '0': ['', Validators.required],
      'validate': [false, Validators.required]
    });

  }

  getCertificateName(): String {
    for (let i = 0; i < this.questions.length; i += 10) {
      if (this.questions[i].certificateId['ceritifcateId'] === this.id) {
        this.certificateName = this.questions[i].certificateId['certificateName'];
        break;
      }
    }
    return this.certificateName + ' Exam';
  }

  navigateToProfile() {
    this.routerService.navigate(['/dashboarduser/']);
  }

  navigateToCertificate(){
    this.routerService.navigate(['/userCertificate/']);
  }

}
