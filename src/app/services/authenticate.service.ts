import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
    public token: string;
    private apiBaseUrl = environment.apiBaseUrl;

    constructor(private http: Http) {
        const currentUser = JSON.parse(localStorage.getItem('token'));
        this.token = currentUser && currentUser.token;
    }

    login(userData: Object): Observable<boolean> {
        return this.http.post(`${this.apiBaseUrl}/user/signin`, userData)
            .map((response: Response) => {
                const token = response.json().token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ token: token }));
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
