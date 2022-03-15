import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { QS_AuthService } from '../qs-auth.service';

@Component({
  selector: 'qs-auth-signin',
  templateUrl: './qs-auth-signin.component.html',
  styleUrls: ['./qs-auth-signin.component.scss'],
})
export class QS_AuthSignInComponent {
  title = "qs-auth-signin";
  signinForm:FormGroup;
  constructor(private auth:QS_AuthService,private fb:FormBuilder){
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