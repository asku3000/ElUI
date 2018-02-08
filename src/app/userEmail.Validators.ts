import { UserService } from './user.service';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { UserServicesService } from "./user-services.service";


export class UserEmailValidators {
    debouncer;
    static isUser;
user_email;
    constructor(public userService: UserServicesService) {
        

    }

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
        }
        return null;
    }

    static validEmail(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf('.com') <= 0) {
            return { validEmail: true }
        }
        return null;
    }

    //  static myValidEmail(control :AbstractControl): ValidationErrors | null{
    //     if((control.value as string).indexOf('.com') != ){
    //         return { validEmail : true }
    //     }
    //     return null;
    // }


    // static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    //     return this.checker(control.value);
    //     //    return new Promise((resolve , rejet) => {
    //     //     setTimeout(()=>{
    //     //         this.userService.checkValidEmail(control.value)
    //     //         .subscribe( data => {
    //     //             this.isUser = data.json();
    //     //             if(this.isUser.user_email != control.value.toLowerCase()){
    //     //                 resolve({shouldBeUnique:true})
    //     //             }else{
    //     //                 resolve(null);
    //     //             }
    //     //         });
    //     // if(control.value != 'Ashish@gmail.com')
    //     //     resolve ({shouldBeUnique:true});

    //     // else resolve (null);



    // };


    // static checker(email: string) {
    //     return new Promise((resolve, rejet) => {
    //         setTimeout(() => {
    //             this.userService.checkValidEmail(email)
    //                 .subscribe(data => {
    //                     this.isUser = data.json();
    //                     if (this.isUser.user_email != email.toLowerCase()) {
    //                         resolve({ shouldBeUnique: true })
    //                     } else {
    //                         resolve(null);
    //                     }
    //                 });
    //         }, 1)
    //     })
    // }
    

    static passwordsShouldMatch(control: AbstractControl) {
        let newPass = control.get('user_password');
        let confPass = control.get('user_confPass');
        if (newPass.value != confPass.value) {
            return { passwordsShouldMatch: true };

        }

        return null;

    }

}