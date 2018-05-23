import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompaniesComponent } from './companies/companies.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path: '*', component: AppComponent},
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'companies', component: CompaniesComponent },
    { path: 'add-company', component: AddCompanyComponent }
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
