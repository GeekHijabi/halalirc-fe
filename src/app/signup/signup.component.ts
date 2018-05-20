import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  hide = true;
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
      this.signupForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
      });
  }


  createUser() {
    console.log('here');
    const {email, name, password} = this.signupForm.value;
      if (!name) {
        return 'username cannot be empty';
      }
      const userPayload = {
        userName: name,
        email: email,
        password: password,
      };
    this.userService.createUser(userPayload)
    .subscribe((response) => {
      this.router.navigate(['/signin']);
    });
  }
}
