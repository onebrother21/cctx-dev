import { Injectable } from '@angular/core';
import { AppService } from '@state';
import { ContactUsMsg } from '../models';
import { tap } from 'rxjs/operators';


@Injectable({providedIn:'root'})

export class ContactUsService {
  ext = "/contact-us";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<ContactUsMsg[]>();}
  send(o:ContactUsMsg){return this.app.http.post<ContactUsMsg>(this.ext,o);}
}
