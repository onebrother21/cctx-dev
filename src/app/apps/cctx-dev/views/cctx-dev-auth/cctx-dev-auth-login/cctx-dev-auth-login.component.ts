import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CCTXDevAuthService } from '../cctx-dev-auth.service';

@Component({
  selector: 'cctx-dev-auth-login',
  templateUrl: './cctx-dev-auth-login.component.html',
  styleUrls: ['./cctx-dev-auth-login.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class CCTXDevAuthLoginComponent {
  title = "cctx-dev-auth-login";
  loginForm:FormGroup;
  constructor(private auth:CCTXDevAuthService,private fb:FormBuilder){
    this.loginForm = this.fb.group({
      type:['login',Validators.required],
      email:['',Validators.required],
    });
  }
  get f(){return this.loginForm.controls;}
  submitForm(){
    const o = this.loginForm.value;
    this.auth.send(o);
    this.loginForm.reset();
  }
}