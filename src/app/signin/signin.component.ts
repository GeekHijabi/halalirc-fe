import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private authenticatedService: AuthenticationService) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      identifier: ['', [Validators.required, Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
    });
  }


  loginUser() {
    const { identifier, password } = this.signInForm.value;
      const userPayload = {
        identifier,
        password,
      };
    this.authenticatedService.login(userPayload)
    .subscribe((response) => {
      this.router.navigate(['/companies']);
    });
  }

}
