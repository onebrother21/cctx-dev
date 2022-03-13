import { Injectable } from '@angular/core';
import { AppService } from '@state';
import { ChatMsg } from '../models';
import { tap } from 'rxjs/operators';


@Injectable({providedIn:'root'})

export class ChatMessagesService {
  ext = "/msgs";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<ChatMsg[]>();}
  send(o:ChatMsg){return this.app.http.post<ChatMsg>(this.ext,o);}
}
