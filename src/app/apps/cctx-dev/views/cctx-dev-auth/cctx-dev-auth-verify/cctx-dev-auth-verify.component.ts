import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CCTXDevAuthService } from '../cctx-dev-auth.service';

@Component({
  selector: 'cctx-dev-auth-verify',
  templateUrl: './cctx-dev-auth-verify.component.html',
  styleUrls: ['./cctx-dev-auth-verify.component.scss'],
})
export class CCTXDevAuthVerifyComponent {
  title = "cctx-dev-auth-verify";
  verifyForm:FormGroup;
  constructor(private auth:CCTXDevAuthService,private fb:FormBuilder){
    this.verifyForm = this.fb.group({
      type:['verify',Validators.required],
      code:['',Validators.required],
    });
  }
  get f(){return this.verifyForm.controls;}
  submitForm(){
    const o = this.verifyForm.value;
    this.auth.send(o);
    this.verifyForm.reset();
  }
}