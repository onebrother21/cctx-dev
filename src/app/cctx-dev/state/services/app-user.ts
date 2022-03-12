import { Injectable } from '@angular/core';
import { AppService } from '@state';
import { User } from '../models';
import { map,tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs';

const me:User = {
  id:"my-id-01",
  created:new Date("06/06/2020"),
  username:"jackswift",
  email:"service.onebrother@gmail.com",
  img:"",
  fullname:"Jack Swift",
};

@Injectable({providedIn:'root'})
export class AppUserService {
  ext = "/app-user";
  constructor(private app:AppService){}
  populate(){return of(me);}//this.get<User[]>();}
  update(o:Partial<User>){return this.app.http.post<User>(this.ext,o);}
}
