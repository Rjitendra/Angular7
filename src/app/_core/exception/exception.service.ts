
import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable, ErrorHandler, Inject } from '@angular/core';
import { AppConfig } from '../../app.config';
import { Response } from '@angular/http';
import { ShareDataService } from '../dataservice';
import { CookieService } from 'ngx-cookie-service';

export class Error {
  title: string;
  messages: any;
  status: number;
}
@Injectable()
export class ExceptionService {
  pageUrl: any;

  constructor(
    private shareDataService: ShareDataService, private cookieService: CookieService) {
    this.pageUrl = AppConfig.settings.apiServer.pageUrl;
  }
  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    const res = <Response>errorResponse;
    switch (true) {
      case res.status >= 500: {
        const error = new Error();
        error.status = res.status;
        error.title = 'The following problem(s) occured.';
        error.messages = 'Try again or reload the page';
        this.shareDataService.setValue(error);
        Observable.throw(error);
        break;
      }
      case res.status === 400: {
        const json = res.json();
        const error = new Error();
        error.status = res.status;
        error.title = 'The following problem(s) occured.';
        // error.messages = json.message;
        error.messages = 'Request failed, please try again later.';
        this.shareDataService.setValue(error);
        Observable.throw(error);
        break;
      }
      case res.status === 401: {
        const error = new Error();
        error.title = 'The following problem(s) occured.';
        error.messages = 'Session has expired';
        this.shareDataService.setValue(error);
        sessionStorage.clear();
        if (this.cookieService.get('preststoken')) {
          this.cookieService.deleteAll();
          window.location.href = this.pageUrl + 'default.aspx';
        } else if (this.cookieService.get('store')) {
          this.cookieService.deleteAll();
          window.location.href = this.pageUrl + 'storelist/noRecords.aspx';
        }
        window.location.href = this.pageUrl + 'default.aspx';
        Observable.throw(error);
        break;
      }
      case res.status === 404: {
        const error = new Error();
        error.title = 'The following problem(s) occured.';
        error.messages = 'A record was not found. Please try again later.';
        this.shareDataService.setValue(error);
        Observable.throw(error);
        break;
      }
      case !navigator.onLine: {
        const json = errorResponse.json();
        const error = new Error();
        error.title = 'The following problem(s) occured.';
        error.messages = 'There is no internet connection!';
        this.shareDataService.setValue(error);
        Observable.throw(error);
        break;
      }
      default: {
        const error = new Error();
        error.title = 'The following problem(s) occured.';
        error.messages = errorResponse.message;
        this.shareDataService.setValue(error);
        return Observable.throw(error);

      }
    }
  }

}


