import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerFrom: FormGroup;

  hasStyle = false;

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) { }

  registerForm = this.fb.group({
    
    email: [, {
      validators: [Validators.required, Validators.email],
      updateOn: "change",
    }],
    //password: [null, Validators.required],
    //confirmPassword: [null, Validators.required],
    
    password: ['', [Validators.required]],
    confirmPassword: ['']
  }, {
    validator: this.checkPasswords
  })

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

  onSubmit() {

  }

}
