import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { ActivatedRoute } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModules } from './material.module';

import { AuthGuard } from './guard/auth.guard';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CompaniesComponent } from './companies/companies.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserService } from './services/user.service';
import { CompanyService } from './services/company.service';
import { AuthenticationService } from './services/authenticate.service';
import { AddCompanyComponent } from './add-company/add-company.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CompaniesComponent,
    AddCompanyComponent,
    NavBarComponent,
    CompanyDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModules,
    AppRoutingModule,
    HttpModule,
    // ActivatedRoute
  ],
  providers: [
    UserService,
    CompanyService,
    AuthenticationService,
    AuthGuard
  ],
  entryComponents: [CompaniesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
