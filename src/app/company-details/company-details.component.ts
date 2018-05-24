import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  pageTitle = 'Company Details';
  companyDetail;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private companyService: CompanyService) { }

  ngOnInit() {
    const param = +this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getCompany(id);
    }
    this.pageTitle += `: ${param}`;

  }
  getCompany(id) {
    this.companyService.getSingleCompany(id)
    .toPromise()
    .then((response) => {
      // this.companyDetail = response.companyDetail;
    });
  }

  onBack(): void {
    this.router.navigate(['/companies']);
  }
}
