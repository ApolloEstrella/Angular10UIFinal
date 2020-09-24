import { Component, Host, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppComponent } from '../app.component';
import * as PersonActions from '../main-app/person-actions'
//var CryptoJS = require("crypto-js");
import * as CryptoJS from 'crypto-js';
import { LocalService } from '../main-app/local.service'
var SecureStorage = require('secure-web-storage');
var SECRET_KEY = 'my secret key';

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

  constructor(private fb: FormBuilder, private router: Router, private store: Store, private parent: AppComponent, private storageService: LocalService) { }

  loginForm = this.fb.group({
    email: [, {
      validators: [Validators.required, Validators.email],
      updateOn: "change",
    }],
    password: [null, Validators.required],
    rememberMe: [false],
    isLoggedIn: [true]
  })

  
  uName: string = this.loginForm.get('email').value;
    
  functioncall(event) {
    console.log('functioncall', event);
  }

  functioncall2(event) {
    this.router.navigate([''])
  }

  /*secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key) {
      key = CryptoJS.SHA256(key, SECRET_KEY);

      return key.toString();
    },
    encrypt: function encrypt(data) {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);

      data = data.toString();

      return data;
    },
    decrypt: function decrypt(data) {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);

      data = data.toString(CryptoJS.enc.Utf8);

      return data;
    }
  }); */

  onSubmit() {
    //alert(this.loginForm.get('email').value)
    this.parent['uName'] = this.loginForm.get('email').value
    const x = this.parent['uName']
    this.storageService.setJsonValue('user', this.loginForm.get('email').value)
    //localStorage.setItem('userName', this.loginForm.get('email').value)
    this.store.dispatch(PersonActions.BeginCreatePersonAction({ payload: this.loginForm.value }));
    this.router.navigate([''])
  }
}
