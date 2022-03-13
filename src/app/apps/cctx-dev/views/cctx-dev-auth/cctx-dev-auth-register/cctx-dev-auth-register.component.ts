import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CCTXDevAuthService } from '../cctx-dev-auth.service';

@Component({
  selector: 'cctx-dev-auth-register',
  templateUrl: './cctx-dev-auth-register.component.html',
  styleUrls: ['./cctx-dev-auth-register.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class CCTXDevAuthRegisterComponent {
  title = "cctx-dev-auth-register";
  registerForm:FormGroup;
  constructor(private auth:CCTXDevAuthService,private fb:FormBuilder){
    this.registerForm = this.fb.group({
      type:['register',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      age:['',Validators.required],
      hometown:['',Validators.required],
    });
  }
  get f(){return this.registerForm.controls;}
  submitForm(){
    const o = this.registerForm.value;
    this.auth.send(o);
    this.registerForm.reset();
  }
}