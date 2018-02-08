import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidation{
    static passwordsShouldMatch(control: AbstractControl) {
        let newPass = control.get('pass');
        let confPass = control.get('confirmPass');
        if (newPass.value != confPass.value) {
            return { passwordsShouldMatch: true };

        }
        return null;
    }

}