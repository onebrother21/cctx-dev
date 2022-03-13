import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CCTXDevAuthService } from '../cctx-dev-auth.service';

@Component({
  selector: 'cctx-dev-auth-signin',
  templateUrl: './cctx-dev-auth-signin.component.html',
  styleUrls: ['./cctx-dev-auth-signin.component.scss'],
})
export class CCTXDevAuthSignInComponent {
  title = "cctx-dev-auth-signin";
  signinForm:FormGroup;
  constructor(private auth:CCTXDevAuthService,private fb:FormBuilder){
    this.signinForm = this.fb.group({
      type:['signin',Validators.required],
      username:['',Validators.required],
    });
  }
  get f(){return this.signinForm.controls;}
  submitForm(){
    const o = this.signinForm.value;
    this.auth.send(o);
    this.signinForm.reset();
  }
}