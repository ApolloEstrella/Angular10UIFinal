import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginFrom: FormGroup;
  rememberMe: false;
  label = "Submit";
  label2 = "Cancel";

  constructor(private fb: FormBuilder, private router: Router) { }

  loginForm = this.fb.group({
    email: [, {
      validators: [Validators.required, Validators.email],
      updateOn: "change",
    }],
    password: [null, Validators.required],
    rememberMe:[false]
  })

  functioncall(event) {
    console.log('functioncall', event);
  }

  functioncall2(event) {
    this.router.navigate([''])
  }

  onSubmit() {

  }
}
