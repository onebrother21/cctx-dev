import { Component,ViewChild,ElementRef } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { QS_SessionComment } from '@qs-state';
import { QS_SessionsCommentsService } from '../qs-sessions-comments.service';
import { QS_SessionsService } from '../qs-sessions.service';

@Component({
  selector: 'qs-session-room',
  templateUrl: './qs-session-room.component.html',
  styleUrls: ['./qs-session-room.component.scss'],
})
export class QS_SessionRoomComponent {
  title = "qs-session-room";
  newComments:QS_SessionComment[] = [];
  blank = {type:"comment",body:"",user:"Jackswift"};
  @ViewChild('videoPlayer') videoplayer:ElementRef = {} as ElementRef;
  toggleVideo(event:any) {this.videoplayer.nativeElement.play();}
  sessionChatForm:FormGroup;
  constructor(
    private sessions:QS_SessionsService,
    private comments:QS_SessionsCommentsService,
    private fb:FormBuilder){
    this.comments.newComment$.subscribe(comment => {
      this.newComments.push(comment);
      if(this.newComments.length == 9) this.newComments.shift();
    });
    this.sessionChatForm = this.fb.group({
      type:['comment',Validators.required],
      body:['',Validators.required],
      user:['Jackswift',Validators.required],
    });
    this.comments.addRandomComment();
  }
  get f(){return this.sessionChatForm.controls;}
  submitForm(){
    const o = this.sessionChatForm.value;
    this.comments.send(o);
    this.sessionChatForm.reset(this.blank);
  }
}
