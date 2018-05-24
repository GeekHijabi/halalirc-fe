import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  @Input() company: any;
  @Output() editCompany = new EventEmitter<string>();
  @Output() closeAddCompanyModal = new EventEmitter<string>();
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

    if (this.createCompanyForm.value === '') {
      this.companyService.getSingleCompany(this.company.id)
      .toPromise()
      .then((response) => {
        this.createCompanyForm.patchValue({
          name: this.company.name,
          address: this.company.address,
          email: this.company.email,
          regDate: this.company.regDate,
          phoneNo: this.company.phoneNo,
          siteAddress: this.company.siteAddress,
          contactPerson: this.company.contactPerson
        });
      });
    }
  }

  addCompany() {
    const { name, address, email, regDate, phoneNo, siteAddress, contactPerson }
    = this.createCompanyForm.value;
    const companyPayLoad = {
      name, address, email, regDate, phoneNo, siteAddress, contactPerson
    };
    this.companyService.createCompany(companyPayLoad)
    .subscribe((response) => {
      console.log(response, companyPayLoad);
      this.router.navigate(['/companies']);
    });
  }

  editCompanyForm(id, company) {
    this.companyService.editCompany(id, company)
    .subscribe((response) => {
      return 'here';
    });
  }


    /**
   * Triggers event that closes the log session modal
   *
   * @return {void}
   */
  closeaddCompanyModal() {
    this.closeAddCompanyModal.emit();
  }

}
