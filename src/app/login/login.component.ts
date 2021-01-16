import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from '../common/validators/username.validators';
import {ZipcodeService} from '../mock/fake';
import {Router} from '@angular/router';
import {FakeAuth} from '../mock/fake-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  form: FormGroup;
  email = new FormControl('',
    [
      Validators.required,
      Validators.email,
      Validators.minLength(8),
      UsernameValidators.cannotContainSpace
    ],
     [
       UsernameValidators.uniqueUsernameValidator(this.zipcodeService)
     ]
  );
  password = new FormControl('',
    [
      Validators.required,
      Validators.minLength(0)
    ]);

  constructor(
    fb: FormBuilder,
    private router: Router,
    private zipcodeService: ZipcodeService,
    private authService: FakeAuth
  ) {
    this.form = fb.group({
      color: this.email,
      fontSize: this.password,
    });
  }

  ngOnInit(): void {
  }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => {
        console.log(result);
        if (result) {
          this.router.navigate(['/']);
        } else {
          this.invalidLogin = true;
        }
      });
  }

}
