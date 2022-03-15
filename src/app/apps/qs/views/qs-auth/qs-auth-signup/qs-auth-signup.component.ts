import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { QS_AuthService } from '../qs-auth.service';

@Component({
  selector: 'qs-auth-signup',
  templateUrl: './qs-auth-signup.component.html',
  styleUrls: ['./qs-auth-signup.component.scss'],
})
export class QS_AuthSignUpComponent {
  title = "qs-auth-signup";
  signupForm:FormGroup;
  constructor(private auth:QS_AuthService,private fb:FormBuilder){
    this.signupForm = this.fb.group({
      type:['signup',Validators.required],
      email:['',Validators.required],
    });
  }
  get f(){return this.signupForm.controls;}
  submitForm(){
    const o = this.signupForm.value;
    this.auth.send(o);
    this.signupForm.reset();
  }
}