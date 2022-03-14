import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CCTXDevMediaSessionComment } from '@cctx-shared';
import { CCTXDevSessionsService } from '../cctx-dev-sessions.service';

@Component({
  selector: 'cctx-dev-session-editor',
  templateUrl: './cctx-dev-session-editor.component.html',
  styleUrls: ['./cctx-dev-session-editor.component.scss'],
})
export class CCTXDevSessionEditorComponent {
  title = "cctx-dev-session-editor";
  newComments:CCTXDevMediaSessionComment[] = [];
  blank = {type:"comment",body:"",user:"Jackswift"};
  sessionChatForm:FormGroup;
  constructor(private sessions:CCTXDevSessionsService,private fb:FormBuilder){
    this.sessions.newComment$.subscribe(comment => {
      this.newComments.push(comment);
      if(this.newComments.length == 9) this.newComments.shift();
    });
    this.sessionChatForm = this.fb.group({
      type:['comment',Validators.required],
      body:['',Validators.required],
      user:['Jackswift',Validators.required],
    });
    this.sessions.addRandomComment();
  }
  get f(){return this.sessionChatForm.controls;}
  submitForm(){
    const o = this.sessionChatForm.value;
    this.sessions.send(o);
    this.sessionChatForm.reset(this.blank);
  }
}
