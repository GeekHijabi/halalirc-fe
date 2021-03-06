import { Component, AfterViewInit, ViewChild, OnInit, TemplateRef, ElementRef } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { Company } from '../interfaces/company.interface';
import { CompanyService } from '../services/company.service';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements AfterViewInit, OnInit {
  displayedColumns = ['name', 'siteAddress', 'email', 'phoneNo', 'contactPerson', 'regDate', 'actions'];
  dataSource = new CompanyDataSource(this.companyService);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private companyService: CompanyService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  createCompany() {
    this.router.navigate(['/add-company']);
  }

  getCompanies(): any {
    this.getCompanies()
    .toPromise()
    .then((response) => {
      // return response;
      console.log('here', response);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    // this.dataSource.filter = filterValue;
  }

}

export class CompanyDataSource extends DataSource<any> {
  constructor(private companyService: CompanyService) {
    super();
  }
  connect(): Observable<Company[]> {
    return this.companyService.getCompanies();
  }
  disconnect() {}
}

