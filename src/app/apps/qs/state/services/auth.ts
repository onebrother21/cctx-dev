import { Injectable } from '@angular/core';
import { AppEntity, AppService } from '@state';
import { AppUser } from '../models';
import { map,tap } from 'rxjs/operators';
import { Observable,of, throwError } from 'rxjs';
import { AuthUsersDBService } from './auth-users-db';

@Injectable({providedIn:'root'})
export class AuthenticationService {
  ext = "/secur01";
  constructor(private app:AppService,private _auth:AuthUsersDBService){}
  save(o:any){this.app.local.set("appuser",o);}
  navigateAuthentication(action:string){
    const navigator = () => {
      switch(true){
        case /signup/.test(action):return "/secur01/verify";
        case /verify/.test(action):return "/secur01/register";
        case /register/.test(action):return "/secur01/update-pin";
        case /update-pin/.test(action):return "/me";
        case /signin/.test(action):return "/secur01/login";
        case /login/.test(action):return "/me";
        default:return "/";
      }
    };
    return of(navigator());
  }
  signin(o:{username:string}){return this._auth.signin(o).pipe(tap(o => this.save(o)));
  }//this.app.http.post<User>(this.ext+"/signin",o);}
  signup(o:{email:string}){return this._auth.signup(o).pipe(tap(o => this.save(o)));
  }//{return this.app.http.post<User>(this.ext+"/signup",o);}
  verify(o:{username:string;code:string}){return this._auth.verify(o).pipe(tap(o => this.save(o)));
  }//{return this.app.http.post<User>(this.ext+"/verify",o);}
  login(o:{username:string;pin:string}){return this._auth.login(o).pipe(tap(o => this.save(o)));
  }//{return this.app.http.post<User>(this.ext+"/login",o);}
  register(o:AppUser){return this._auth.register(o).pipe(tap(o => this.save(o)));
  }//{return this.app.http.post<User>(this.ext+"/register",o);}
  forgot(o:{email:string}){return of(o);}
  //{return this.app.http.post<User>(this.ext+"/forgot",o);}
  updatePin(o:{username:string;pin:string}){return this._auth.updatePin(o).pipe(tap(o => this.save(o)));
  }//{return this.app.http.post<User>(this.ext+"/updatePin",o);}
  update(o:Partial<AppUser>){return this._auth.update(o).pipe(tap(o => this.save(o)));
  }//{return this.app.http.post<User>(this.ext+"/update",o);}
}