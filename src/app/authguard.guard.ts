import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
@Injectable()
export class AuthguardGuard implements CanActivate {
   constructor(private user:UserService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
     if(this.user.isLoggedIn())
     {
       return true;
     }
     this.router.navigate(['/login']);
     
     return false;
  
  }
  // checkLoggedIn():boolean
  // {
  //    if(this.user.isLoggedIn())
  //    {
  //      return true;
  //    }
  //    this.router.navigate(['/login'],{ queryParams: { returnUrl: state.url }});
     
  //    return false;
  // }
}
