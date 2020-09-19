import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as PersonActions from '../main-app/person-actions'

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

  constructor(private fb: FormBuilder, private router: Router, private store: Store) { }

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
    //alert(this.loginForm.get('email').value)
    this.store.dispatch(PersonActions.BeginCreatePersonAction({ payload: this.loginForm.get('email').value}));
    this.router.navigate([''])
  }
}
