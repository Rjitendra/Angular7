import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class SessionService {
    constructor(private http: HttpClient) { }

    setSessionData(data: any, key: string) {
        sessionStorage.setItem(key, JSON.stringify(data));
    }
    getSessionData(key) {
      return key ? JSON.parse(sessionStorage.getItem(key)) : null;
    }
}