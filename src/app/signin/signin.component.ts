import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required, Validators.maxLength(5)]);
  password = new FormControl('', [Validators.required, Validators.maxLength(8)]);

  constructor() { }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  getNameErrorMessage() {
    return this.name.hasError('required') ? 'Input a valid name' :
          this.name.hasError('name') ? 'Name must be 5 characters or more.' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'Input a valid password' :
            this.password.hasError('password') ? 'Password must be 8 characters or more' : '';

  }

}
