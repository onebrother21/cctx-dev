import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CCTXDevAuthService } from '../cctx-dev-auth.service';

@Component({
  selector: 'cctx-dev-auth-forgot',
  templateUrl: './cctx-dev-auth-forgot.component.html',
  styleUrls: ['./cctx-dev-auth-forgot.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class CCTXDevAuthForgotComponent {
  title = "cctx-dev-auth-forgot";
  forgotForm:FormGroup;
  constructor(private auth:CCTXDevAuthService,private fb:FormBuilder){
    this.forgotForm = this.fb.group({
      type:['forgot',Validators.required],
      email:['',Validators.required],
    });
  }
  get f(){return this.forgotForm.controls;}
  submitForm(){
    const o = this.forgotForm.value;
    this.auth.send(o);
    this.forgotForm.reset();
  }
}