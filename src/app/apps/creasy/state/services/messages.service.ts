import { Injectable } from '@angular/core';
import { of,tap } from 'rxjs';

import { AppService } from '../app';
import { Message } from '../../models';
@Injectable({providedIn:'root'})

export class MessagesService {
  ext = "/msgs";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<Message[]>("/");}
  fetchOne(id:string){return this.app.http.get<Message>("/"+id);}
  send(o:Message){return this.app.http.post<Message>("/",o);}
}
