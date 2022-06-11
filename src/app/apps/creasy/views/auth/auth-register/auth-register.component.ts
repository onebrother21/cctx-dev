import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Creasy_AuthService } from '../auth.service';

@Component({
  selector: 'creasy-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
})
export class Creasy_AuthRegisterComponent {
  title = "creasy-auth-register";
  registerForm:FormGroup;
  loading:boolean = false;
  constructor(private auth:Creasy_AuthService,private fb:FormBuilder){
    this.auth.loading.subscribe(loading => this.loading = loading);
    this.registerForm = this.fb.group({
      action:['register',Validators.required],
      username:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      age:['',Validators.required],
      hometown:['',Validators.required],
    });
  }
  get f(){return this.registerForm.controls;}
  submitForm(){
    const {firstname,lastname,..._o} = this.registerForm.value;
    const o = {..._o,name:{first:firstname,last:lastname}};
    this.auth.send(o);
    this.registerForm.reset({
      action:"register",
      username:"",
      firstname:"",
      lastname:"",
      age:"",
      hometown:"",
    });
  }
}