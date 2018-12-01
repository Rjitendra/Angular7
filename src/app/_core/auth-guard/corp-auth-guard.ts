import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SessionService } from '..';
@Injectable({ providedIn: 'root' })
export class CorpAuthGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService, private sessionService: SessionService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.cookieService.get('ststokenclientcredentials');
    if (token) {
      return true;
    }

    window.location.href = '/default.aspx';
    return false;
  }
}
