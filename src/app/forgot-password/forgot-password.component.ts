import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

 

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {


  constructor(private fb: FormBuilder) { }

  forgotPasswordForm = this.fb.group({
    email: [, {
      validators: [Validators.required, Validators.email],
      updateOn: "change"
    }]
  })

  onSubmit() {

  }
}
