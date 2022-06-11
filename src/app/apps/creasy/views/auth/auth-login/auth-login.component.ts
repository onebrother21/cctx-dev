import { Component } from '@angular/core';
import { Creasy_AuthService } from '../auth.service';

@Component({
  selector: 'creasy-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class Creasy_AuthLoginComponent {
  title = "creasy-auth-login";
  greeting = "Enter Your Pin";
  pinConfig = {
    minlength:4,
    maxlength:4,
    masked:true
  };
  loading:boolean = false;
  constructor(private auth:Creasy_AuthService){
    this.auth.loading.subscribe(loading => this.loading = loading);
  }
  submitPin(pin:string){this.auth.send({action:"login",pin});}
}