import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class AuthenticationService {
    public token: string;
    private apiBaseUrl = environment.apiBaseUrl;

    constructor(private http: Http) {
        // const token = JSON.parse(localStorage.getItem('token'));
        // this.token = token;
    }

    login(userData: Object): Observable<boolean> {
        return this.http.post(`${this.apiBaseUrl}/user/signin`, userData)
            .map((response: Response) => {
                const token = response.json().token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('token', token);
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('token');
    }
}
