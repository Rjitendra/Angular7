import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { UserData } from '../../model/userData.model';

@Injectable()
export class HttpRequestConstants {
  userData: UserData;
  constructor(private cookieService: CookieService) {
    this.userData = new UserData(this.cookieService);
  }
  get RequestOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + this.cookieService.get('ststoken')
      })
    };
    return httpOptions;
  }

  get  RequestOptionsForCorpUser() {
    const  httpOptions  =  {
      headers:  new  HttpHeaders({
        'Accept':  'application/json',
        'Content-Type':  'application/json',
        'Authorization':  'bearer '  + this.cookieService.get('ststokenclientcredentials'),
        'Authorizationpre':  this.cookieService.get('preststoken')
      })
    };

    return  httpOptions;
  }
}

