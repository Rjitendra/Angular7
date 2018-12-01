import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SessionService } from '..';
@Injectable({ providedIn: 'root' })
export class StoreAuthGuard implements CanActivate {
    isTokenAquired = false;
    isUserLoggedIn = false;
    constructor(private router: Router, private cookieService: CookieService, private sessionService: SessionService, ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = this.cookieService.get('ststoken');
        const store = this.cookieService.get('store');
        if (token && store) {
            return true;
        }
        window.location.href = '/storelist/noRecords.aspx';
        return false;
    }
}