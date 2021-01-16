import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators, ZipcodeValidator} from '../common/validators/username.validators';
import {ZipcodeService} from '../services/fake';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email = new FormControl('',
    [
      // Validators.required,
      // Validators.email,
      // Validators.minLength(8),
    ],
     [UsernameValidators.uniqueUsernameValidator(this.zipcodeService)]
  );
  password = new FormControl('', [Validators.required, Validators.minLength(0)]);

  constructor(fb: FormBuilder, private zipcodeService: ZipcodeService) {
    this.form = fb.group({
      color: this.email,
      fontSize: this.password,
    });
  }

  ngOnInit(): void {
  }

}
