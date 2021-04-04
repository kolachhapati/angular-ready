import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { catchError, map } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public auth: AuthService, public router: Router) { }
    canActivate(): boolean {
        if(!this.auth.isAuthenticated())
        {
            this.router.navigateByUrl("/login");
            return false;
        }
        return true;
    }
}