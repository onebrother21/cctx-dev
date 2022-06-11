import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Creasy_SessionComment } from '@creasy-state';
import { Creasy_SessionsCommentsService } from '../messages-reply.service';
import { Creasy_SessionsService } from '../messages.service';

@Component({
  selector: 'qs-session-editor',
  templateUrl: './qs-session-editor.component.html',
  styleUrls: ['./qs-session-editor.component.scss'],
})
export class Creasy_SessionEditorComponent {
  title = "qs-session-editor";
  newComments:Creasy_SessionComment[] = [];
  blank = {type:"comment",body:"",user:"Jackswift"};
  sessionEditorForm:FormGroup;
  constructor(
    private sessions:Creasy_SessionsService,
    private comments:Creasy_SessionsCommentsService,
    private fb:FormBuilder){
    this.comments.newComment$.subscribe(comment => {
      this.newComments.push(comment);
      if(this.newComments.length == 9) this.newComments.shift();
    });
    this.sessionEditorForm = this.fb.group({
      type:['comment',Validators.required],
      body:['',Validators.required],
      user:['Jackswift',Validators.required],
    });
    //this.comments.addRandomComment();
  }
  get f(){return this.sessionEditorForm.controls;}
  submitForm(){
    const o = this.sessionEditorForm.value;
    this.comments.send(o);
    this.sessionEditorForm.reset(this.blank);
  }
}
