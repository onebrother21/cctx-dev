import { Component } from '@angular/core';
import { Creasy_AuthService } from '../auth.service';

@Component({
  selector: 'creasy-auth-update-pin',
  templateUrl: './auth-update-pin.component.html',
  styleUrls: ['./auth-update-pin.component.scss'],
})
export class Creasy_AuthUpdatePinComponent {
  title = "creasy-auth-update-pin";
  greeting = "Create A Pin";
  confirm:string = "";
  pinConfig = {
    minlength:4,
    maxlength:4,
    masked:true
  };
  loading:boolean = false;
  constructor(private auth:Creasy_AuthService){
    this.auth.loading.subscribe(loading => this.loading = loading);
  }
  submitPin(pin:string){
    if(!this.confirm){this.confirm = pin;this.greeting = "Confirm Your Pin";}
    else if(this.confirm == pin) this.auth.send({action:"update-pin",pin});
    else return;
  }
}