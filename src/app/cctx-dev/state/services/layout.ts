import { Injectable } from '@angular/core';
import { AppService } from '@state';
import { AppLayout } from '../models';
import { tap } from 'rxjs/operators';


@Injectable({providedIn:'root'})

export class LayoutService {
  ext = "/layout";
  constructor(private app:AppService){}
  fetch(){return this.app.http.get<AppLayout>(this.ext);}
}
