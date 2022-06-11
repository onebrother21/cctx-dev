import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Creasy_AuthService } from '../auth.service';

@Component({
  selector: 'creasy-auth-forgot',
  templateUrl: './auth-forgot.component.html',
  styleUrls: ['./auth-forgot.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class Creasy_AuthForgotComponent {
  title = "creasy-auth-forgot";
  forgotForm:FormGroup;
  loading:boolean = false;
  constructor(private auth:Creasy_AuthService,private fb:FormBuilder){
    this.auth.loading.subscribe(loading => this.loading = loading);
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