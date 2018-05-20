import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      identifier: ['', [Validators.required, Validators.maxLength(5)]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
    });
  }


  loginUser() {
    const { identifier, password } = this.signInForm.value;
      const userPayload = {
        identifier,
        password,
      };
    this.userService.signInUser(userPayload)
    .subscribe((response) => {
      this.router.navigate(['/companies']);
      console.log('user signed in');
    });
  }

}
