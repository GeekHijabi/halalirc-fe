import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements AfterViewInit {

  displayedColumns = ['name', 'address', 'phoneNo', 'contactPerson'];
  dataSource = new MatTableDataSource<Company>(CompanyList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}

export interface Company {
  name: string;
  address: string;
  phoneNo: string;
  contactPerson: string;
}

const CompanyList: Company[]  = [
{ name: 'someone', address: 'this place', phoneNo: '08034434532', contactPerson: 'Hamd'},
{ name: 'hername', address: 'Helium', phoneNo: '400269999', contactPerson: 'Hamd'},
];
