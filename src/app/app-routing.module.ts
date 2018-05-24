import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AuthGuard } from './guard/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path: '*', component: AppComponent},
    { path: '', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'companies', component: CompaniesComponent, canActivate: [AuthGuard] },
    { path: 'companies/:id', component: CompanyDetailsComponent },
    { path: 'add-company', component: AddCompanyComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
