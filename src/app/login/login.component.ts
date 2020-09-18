import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginFrom: FormGroup;
  rememberMe: false;

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    email: [, {
      validators: [Validators.required, Validators.email],
      updateOn: "change",
    }],
    password: [null, Validators.required],
    rememberMe:[false]
  })

  onSubmit() {

  }
}
