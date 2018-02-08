import { ValueComponent } from './value/value.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LandingComponent } from './landing/landing.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchesComponent } from './searches/searches.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { TestDescriptionComponent } from './test-description/test-description.component';
import { ExamComponent } from "./exam/exam.component";
import { CourseComponent } from './course/course.component';
import { UserCertificateComponent } from "./user-certificate/user-certificate.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

import {UsersComponent} from './admin-dashboard/users/users.component';

import { CategoryComponent } from './category/category.component';



const routes: Routes = [
    {
        path: 'home',
        component: LandingComponent
    },
    {
        path: 'forgotPassword',
        component: ForgotPasswordComponent
    },
    
    {
        path: 'resetPassword',
        component: ResetPasswordComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'coursedetails/:id',
        component: CourseComponent
    },
    {
        path: 'category/:name',
        component: CategoryComponent
    },
    {
        path: 'search',
        component: SearchesComponent
    },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactusComponent },
    {
        path: 'certificatesearch',
        component: CertificateListComponent
    },
    {
        path:'testdesc/:id',
        component:TestDescriptionComponent
    },  
    {
        path: 'testStart/:id',
        canActivate: [AuthguardGuard],
        component:ExamComponent
    },

    {
        path: 'verifyOTP/:id',
        component: VerifyOtpComponent
    },

     {
        path: 'dashboarduser',
        canActivate: [AuthguardGuard],
        loadChildren:'./dashboarduser/dashboarduser.module#DashboarduserModule'
    },
     {
        path: 'dashboardprovider',
         canActivate: [AuthguardGuard],
        loadChildren:'./dashboardprovider/dashboardprovider.module#DashboardproviderModule'
    },
    
    {
        path: 'resetPassword/:id',
        component: ResetPasswordComponent

    },
    {
        path: 'userCertificate',
        canActivate: [AuthguardGuard],
        component: UserCertificateComponent
    },
    {

        path: 'mydashboardadmin',
        canActivate: [AuthguardGuard],
        loadChildren: './admin-dashboard/admin-dashboard.module#AdminDashboardModule'
    },
    {

        path: 'signup',
        component: SignUpComponent

    },

    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {
        path: '**', redirectTo: 'home', pathMatch: 'full'
    },
    

];

@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash : true})],
  
    exports: [RouterModule]
     
})
export class FeatureRoutingModule { }
