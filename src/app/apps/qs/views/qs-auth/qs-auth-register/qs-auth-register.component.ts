import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { QS_AuthService } from '../qs-auth.service';

@Component({
  selector: 'qs-auth-register',
  templateUrl: './qs-auth-register.component.html',
  styleUrls: ['./qs-auth-register.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class QS_AuthRegisterComponent {
  title = "qs-auth-register";
  registerForm:FormGroup;
  constructor(private auth:QS_AuthService,private fb:FormBuilder){
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