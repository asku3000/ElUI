import { RatingsServiceService } from './../ratings-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SafePipe } from '../safe.pipe';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy {

  private id: number;
  private sub;
  inlen: string;
  name: string;
  member: any = ``;
  searche: string;
  found: boolean = false;
  mycolor;
  myName: string = "Ashish Kumar";
  length;
  totalStars: number = 0;
  avgStars: any;
  reviewButton: boolean;
  userId;
  rating_message;
  courseId;
  ratingStars;
  date;
  time;
  editReview;
  saved: boolean = false;



  ratings = [];

  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private ratingService: RatingsServiceService, private userService: UserService) {

  }
  panelOpenState: boolean = false;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });

    this.search(this.id);
    //this.checkLogin();
    this.ratingService.getRatings(this.id)
      .subscribe(data => {
        this.ratings = data.json();

        this.length = this.ratings.length;
        this.calculateRatings(this.ratings);
      })


    this.checkUser();

  }

  calculateRatings(ratingss) {
    for (var item of ratingss) {
      this.totalStars += item.rating;
    }
    this.avgStars = this.totalStars / this.length;


  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  search(id) {
    // console.log(this.id);
    // https://jeducentralservice.azurewebsites.net
    this.httpClient.get(`https://educentralservicedev.azurewebsites.net/EduCentral/course_id/id=${this.id}`)
      .subscribe(
      (data: any[]) => {


        if (data.length != 0) {
          this.member = data;
          this.found = true;
        } else {
          this.member = data;
          this.found = false;

        }

      }
      )


  }



  // Reviews

  checkUser() {
    if (localStorage.getItem("username") || localStorage.getItem("email") || localStorage.getItem("name") || localStorage.getItem("role")) {
      this.reviewButton = true;
    }
  }


  //--Dialog------
  checkLogin() {

    if (localStorage.getItem("username") || localStorage.getItem("name") || localStorage.getItem("role")) {

      this.reviewButton = true;
    }

    else {

      this.reviewButton = false;

    }
  }

  myform = new FormGroup({

    message: new FormControl('', [
      Validators.required,
      Validators.maxLength(490),
      Validators.minLength(10)
    ]),

    rating: new FormControl('', [

    ])
  });

  get message() {
    return this.myform.get('message');
  }

  get rating() {
    return this.myform.get('rating')
  }

  checkingReviews() {
    if (localStorage.getItem("username")) {
      var userId = localStorage.getItem("userId");

    }
  }

  postReview() {
    if (localStorage.getItem("userId")) {
      this.userId = localStorage.getItem("userId");
      this.rating_message = this.myform.value.message;
      this.ratingStars = this.myform.value.rating;
      this.courseId = this.id;
      this.date = this.formatAMPM(new Date());
      this.time = this.getMyDate(new Date());
      this.ratingService.saveRatings(this.courseId, this.userId, this.rating_message, this.ratingStars, this.date, this.time)
        .subscribe(data => {
          if (data.json() == true) {
            this.saved = true;
            this.ratingService.getRatings(this.id)
              .subscribe(data => {
                this.ratings = data.json();

                this.length = this.ratings.length;
                this.calculateRatings(this.ratings);
              })
          }
        });

    }

  }






  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  getMyDate(today) {
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    // console.log(dd);
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;
    console.log(today);
    return today;
  }

}
