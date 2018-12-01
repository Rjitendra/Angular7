import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';



@Injectable({ providedIn: 'root' })
export class UserService {
    apiUrl: any;
    constructor(private http: HttpClient) { this.apiUrl = 'http://localhost:4000'; }

    getAll() {

        // return this.http.get<User[]>(`${config.apiUrl}/users`);http://localhost:4000
        return this.http.get<User[]>(`${this.apiUrl}/users`)
    }

    getById(id: number) {
        return this.http.get<User>(`${this.apiUrl}/users/${id}`);
    }
}