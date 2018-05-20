import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  private apiBaseUrl = 'http://localhost:8000/api/v1';

  constructor(
    protected http: Http,
  ) {}


  /**
   * Creates a new user.
   *
   * @param {object} - userData
   *
   * @return {Observable} user
   */
  createUser(userData: Object) {
    return this.http.post(`${this.apiBaseUrl}/user/register`, userData)
    .map(response => response.json)
    .catch(error => error.json);
  }

  /**
   * Creates a new user.
   *
   * @param {object} - userData
   *
   * @return {Observable} user
   */
  signInUser(userData: Object) {
    return this.http.post(`${this.apiBaseUrl}/user/signin`, userData)
    .map(response => response.json)
    .catch(error => error.json);
  }

}
