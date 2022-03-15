import { Component } from '@angular/core';
import { QS_AuthService } from '../qs-auth.service';

@Component({
  selector: 'qs-auth-login',
  templateUrl: './qs-auth-login.component.html',
  styleUrls: ['./qs-auth-login.component.scss'],
})
export class QS_AuthLoginComponent {
  title = "qs-auth-login";
  greeting = "Enter Your Pin";
  pinConfig = {
    minlength:4,
    maxlength:4,
    masked:true
  };
  constructor(private auth:QS_AuthService){}
  submitPin(pin:string){this.auth.send({type:"login",pin});}
}