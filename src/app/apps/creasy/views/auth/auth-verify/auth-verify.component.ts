import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Creasy_AuthService } from '../auth.service';

@Component({
  selector: 'creasy-auth-verify',
  templateUrl: './auth-verify.component.html',
  styleUrls: ['./auth-verify.component.scss'],
})
export class Creasy_AuthVerifyComponent {
  title = "creasy-auth-verify";
  verifyForm:FormGroup;
  loading:boolean = false;
  constructor(private auth:Creasy_AuthService,private fb:FormBuilder){
    this.auth.loading.subscribe(loading => this.loading = loading);
    this.verifyForm = this.fb.group({
      action:['verify',Validators.required],
      code:['',Validators.required],
    });
  }
  get f(){return this.verifyForm.controls;}
  submitForm(){
    const o = this.verifyForm.value;
    this.auth.send(o);
    this.verifyForm.reset({action:"verify",code:""});
  }
}