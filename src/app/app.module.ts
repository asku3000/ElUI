import { RatingsServiceService } from './ratings-service.service';
import { NamePipe } from './firstLetter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { InterceptorModule } from './interceptor.module';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { SearchesComponent } from './searches/searches.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { FeatureRoutingModule } from "./app-routing.module";
import { CourseService } from './course.service';
import { ExamComponent } from './exam/exam.component';
import { ExamServiceService } from './exam-service.service';
import { TestDescriptionComponent } from './test-description/test-description.component';
import { CertificateListServiceService } from './certificate-list-service.service';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { ValueComponent } from './value/value.component';
import { UserServicesService } from './user-services.service';
import { SearchService } from './search.service';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { CourseComponent } from './course/course.component';
import { SafePipe } from './safe.pipe';
import { UserCertificateServiceService } from "./user-certificate-service.service";
import { UserCertificateComponent } from './user-certificate/user-certificate.component';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("678086631262-92qjqfjbkadd9rgr1s0fvhguksra250u.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1999950043552271")
  }
]);
import { CdkTableModule } from "@angular/cdk/table";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  
} from '@angular/material';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignupserviceService } from './signupservice.service';
import { ProviderUserService } from "./admin-dashboard/providerUser.service";
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    SearchesComponent,
    NamePipe,
    AboutComponent,
    ContactusComponent,
    ForgotPasswordComponent,
    VerifyOtpComponent,
    ResetPasswordComponent,
    LoginComponent,
    ExamComponent,
    TestDescriptionComponent,
    CertificateListComponent,


    ValueComponent,


    CourseComponent,


    SafePipe,


    UserCertificateComponent,


    SignUpComponent,


    CategoryComponent,

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    InterceptorModule,
    CdkTableModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule.initialize(config),
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule, 



  ],

  exports: [AppComponent, HeaderComponent, FooterComponent, LandingComponent, SearchesComponent, AboutComponent, ContactusComponent, ForgotPasswordComponent, VerifyOtpComponent, ResetPasswordComponent, LoginComponent, ExamComponent, TestDescriptionComponent, CertificateListComponent, ValueComponent],

  providers: [CourseService, ExamServiceService, CertificateListServiceService, ValueComponent, UserServicesService, SearchService, UserService, AuthguardGuard, UserCertificateServiceService,RatingsServiceService, SignupserviceService],

  bootstrap: [AppComponent]
})
export class AppModule { }
