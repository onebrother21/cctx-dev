import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Creasy_AuthService } from '../auth.service';

@Component({
  selector: 'creasy-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss'],
})
export class Creasy_AuthSignInComponent {
  title = "creasy-auth-signin";
  signinForm:FormGroup;
  loading:boolean = false;
  constructor(private auth:Creasy_AuthService,private fb:FormBuilder){
    this.auth.loading.subscribe(loading => this.loading = loading);
    this.signinForm = this.fb.group({
      action:['signin',Validators.required],
      username:['',Validators.required],
    });
  }
  get f(){return this.signinForm.controls;}
  submitForm(){
    const o = this.signinForm.value;
    this.auth.send(o);
    this.signinForm.reset({action:"signin",username:""});
  }
}