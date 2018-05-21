import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MaterialModules } from './material.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CompaniesComponent } from './companies/companies.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserService } from './services/user.service';
import { CompanyService } from './services/company.service';
import { AuthenticationService } from './services/authenticate.service';
import { AddCompanyComponent } from './add-company/add-company.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CompaniesComponent,
    AddCompanyComponent,
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
  ],
  providers: [
    UserService,
    CompanyService,
    AuthenticationService
  ],
  entryComponents: [CompaniesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
