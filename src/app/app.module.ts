import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import 'hammerjs';

import { MaterialModules } from './material.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from './/app-routing.module';
import { CompaniesComponent } from './companies/companies.component';

import { CdkTableModule} from '@angular/cdk/table';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CompaniesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CdkTableModule,
    MatTableModule,
    BrowserAnimationsModule,
    MaterialModules,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
