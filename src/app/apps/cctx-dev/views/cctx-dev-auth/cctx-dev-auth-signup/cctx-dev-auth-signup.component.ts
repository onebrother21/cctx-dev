import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CCTXDevAuthService } from '../cctx-dev-auth.service';

@Component({
  selector: 'cctx-dev-auth-signup',
  templateUrl: './cctx-dev-auth-signup.component.html',
  styleUrls: ['./cctx-dev-auth-signup.component.scss'],
})
export class CCTXDevAuthSignUpComponent {
  title = "cctx-dev-auth-signup";
  signupForm:FormGroup;
  constructor(private auth:CCTXDevAuthService,private fb:FormBuilder){
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