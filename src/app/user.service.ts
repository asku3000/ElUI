import { Injectable } from '@angular/core';
import { User } from './login/user';

import { AuthService, SocialUser } from 'angular4-social-login';

@Injectable()
export class UserService {
    currentUser: User[];
    status: boolean;
    userRole: string
    title: string

    constructor(private authService: AuthService) {
    }

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }


    logout(): void {
        this.authService.signOut();

        this.currentUser = null;
    }
    setRole(useRole) {
        this.userRole = useRole;
    }
    setName(name) {
        this.title = name;
    }
    setTitle() {
        return localStorage.getItem('name');
    }

}
