import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Creasy_UserService } from '../me.service';

@Component({
  selector: 'qs-user-acct-editor',
  templateUrl: './qs-user-acct-editor.component.html',
  styleUrls: ['./qs-user-acct-editor.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class Creasy_UserAccountEditorComponent {
  title = "qs-user-acct-editor";
  updateAcctForm:FormGroup;
  loading:boolean = false;
  constructor(private user:Creasy_UserService,private fb:FormBuilder){
    this.user.loading.subscribe(loading => this.loading = loading);
    this.updateAcctForm = this.fb.group({
      action:['update',Validators.required],
      username:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      age:['',Validators.required],
      hometown:['',Validators.required],
    });
  }
  get f(){return this.updateAcctForm.controls;}
  submitForm(){
    const {firstname,lastname,..._o} = this.updateAcctForm.value;
    const o = {..._o,name:{first:firstname,last:lastname}};
    this.user.send(o);
    this.updateAcctForm.reset({
      action:"updateAcct",
      username:"",
      firstname:"",
      lastname:"",
      age:"",
      hometown:"",
    });
  }
}