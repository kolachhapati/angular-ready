import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../../auth/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public auth: AuthService, public router: Router) { }

    canActivate(): boolean {
        debugger;
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}