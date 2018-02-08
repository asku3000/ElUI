import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router";
import { AuthService } from "angular4-social-login";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  developmentCategories = ['Web Development','Game Development','Database','Software Testing','Hardware','Operating System','Network and Security'];
  
  businessCategories = ['Finances','Entrepreneurship','Management','Sales'];

  // itAndSoftwareCategories = [];
  title:any;
  isLoggedIn:boolean=false;

  personalDevelopmentCategories = ['Career Development','Leadership','Personal Finances'];
  
  marketingCategories = ['Digital Marketing','Public Relation','Social Media Marketing'];
  constructor(private userService: UserService,private router:Router,private authService: AuthService) {
 
   }

  ngOnInit() {
    //this.title = localStorage.getItem("username");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("contact");
    localStorage.removeItem("plink");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
  }

  collapseNav(){
    document.getElementById("bs-example-navbar-collapse-1").style.height = "0px";
  }

  clicekd(i) {
    console.log(i);
    console.log(this.developmentCategories[i]);
    //  document.getElementById("bs-example-navbar-collapse-1").style.height = "0px";
 

  }
  login()
  {
       this.isLoggedIn=true;

       this.title=this.userService.title;
       console.log(this.title)

       this.router.navigateByUrl['/login'];
       
       
  }
  logout()
  {
    this.authService.signOut();
    this.userService.logout();
    this.isLoggedIn=false;
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    localStorage.removeItem("contact");
    localStorage.removeItem('plink')
    this.collapseNav();
    this.router.navigate(['/landing']);
  }
   
}



