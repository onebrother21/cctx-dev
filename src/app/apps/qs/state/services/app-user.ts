import { Injectable } from '@angular/core';
import { AppService } from '@state';
import { AppUser } from '../models';
import { map,tap } from 'rxjs/operators';
import { Observable,of } from 'rxjs';
import { AuthUsersDBService } from './auth-users-db';

const me:AppUser = {
  id:"my-id-01",
  phn:"832-448-1315",
  created:new Date("06/06/2020"),
  username:"jackswift",
  email:"service.onebrother@gmail.com",
  img:"",
  name:{first:"Jack",last:"Swift"},
};

@Injectable({providedIn:'root'})
export class AppUserService {
  ext = "/app-user";
  constructor(private app:AppService,private _auth:AuthUsersDBService){}
  populate(){return of(this.fetchLocalUser()).pipe(tap(user => console.log(user)));}
  update(o:Partial<AppUser>){return this.app.http.post<AppUser>(this.ext,o);}
  private fetchLocalUser(){return this.app.local.get("appuser");}
  private saveLocalUser(o:any){this.app.local.set("appuser",o);}
}
