import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authenticate.service';
import { environment } from '../../environments/environment.prod';
import { Company } from '../interfaces/company.interface';

@Injectable()
export class CompanyService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(protected http: Http,
    private authenticatedService: AuthenticationService) { }

  /**
   * Creates a new company.
   *
   * @param {object} - userData
   *
   * @return {Observable} user
   */
  createCompany(companyData: Object) {
    const headers = new Headers({ 'Authorization': 'x-token ' + this.authenticatedService.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.apiBaseUrl}/company/register`, companyData, options)
    .map(response => response.json)
    .catch(error => error.json);
  }

  /**
   * Gets all companies.
   *
   * @param {object} - userData
   *
   * @return {Observable} user
   */
  getCompanies(): Observable<Company[]> {
    const headers = new Headers({ 'Authorization': 'x-token ' + this.authenticatedService.token });
    const options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.apiBaseUrl}/companies`, options)
    .map(response => response.json().Companies)
    .catch(error => error.json);
  }

  editCompany(id, companyData): Observable<Company[]> {
    return this.http.patch(`${this.apiBaseUrl}/company/${id}`, companyData)
    .map(response => response.json())
    .catch(error => error.json());
  }

  getSingleCompany(companyId: number): Observable<any[]> {
    return this.http.get(`${this.apiBaseUrl}/company/${companyId}`)
    .map(response => response.json())
    .catch(error => error.json);
  }

}
