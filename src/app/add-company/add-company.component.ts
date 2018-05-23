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
      name: ['', [Validators.required, Validators.minLength(12)]],
      address: ['', [Validators.required, Validators.minLength(12)]],
      email: ['', [Validators.required, Validators.minLength(12)]],
      regDate: ['', [Validators.required, Validators.minLength(8)]],
      phoneNo: ['', [Validators.required, Validators.minLength(11)]],
      siteAddress: ['', [Validators.required, Validators.minLength(12)]],
      contactPerson: ['', [Validators.required, Validators.minLength(12)]],
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
