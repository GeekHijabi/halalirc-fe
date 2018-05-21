import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  createCompanyForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private companyService: CompanyService) { }

  ngOnInit() {
    this.createCompanyForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(5)]],
      address: ['', [Validators.required, Validators.maxLength(8)]],
      email: ['', [Validators.required, Validators.maxLength(8)]],
      regDate: ['', [Validators.required, Validators.maxLength(8)]],
      phoneNo: ['', [Validators.required, Validators.maxLength(8)]],
      siteAddress: ['', [Validators.required, Validators.maxLength(8)]],
      contactPerson: ['', [Validators.required, Validators.maxLength(8)]],
    });
  }

  addCompany() {
    const { name, address, email, regDate, phoneNo, siteAddress, contactPerson }
    = this.createCompanyForm.value;
    const companyPayLoad = {
      name, address, email, regDate, phoneNo, siteAddress, contactPerson
    };
    this.companyService.createCompany(companyPayLoad)
    .subscribe((response) => {
      this.router.navigate(['/companies']);
    });
  }
}
