import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from '../common/validators/username.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  email = new FormControl('',
    [
      Validators.required,
      Validators.email,
      Validators.minLength(8),
      UsernameValidators.cannotContainSpace,
      UsernameValidators.shouldBeUnique
    ]
  );
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      color: this.email,
      fontSize: this.password,
    });
  }

  ngOnInit(): void {
  }

}
