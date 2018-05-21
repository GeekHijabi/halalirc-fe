import { Component, AfterViewInit, ViewChild, OnInit, TemplateRef, ElementRef } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/table';
import { CompanyService } from '../services/company.service';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements AfterViewInit, OnInit {
  displayedColumns = ['name', 'siteAddress', 'email', 'phoneNo', 'contactPerson', 'regDate', 'actions'];
  dataSource = new MatTableDataSource<Company>(CompanyList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private companyService: CompanyService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createCompany() {
    this.router.navigate(['/add-company']);
  }

  getCompanies() {
    this.companyService.getCompanies()
    .subscribe((response) => {
      console.log(response, 'response');
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}

export interface Company {
  name: string;
  siteAddress: string;
  email: string;
  regDate: string;
  phoneNo: string;
  contactPerson: string;
}

const CompanyList: Company[]  = [
{ name: 'someone',
email: 'this@tht.com',  regDate: '08/1/2015', phoneNo: '08034434532', contactPerson: 'Hamd', siteAddress: '235, ilupeju rd, lagos'},
{ name: 'hername',
email: 'this@tht.com', regDate: '08/1/2015', phoneNo: '400269999', contactPerson: 'Hamd', siteAddress: '235, ilupeju rd, lagos'},
];
