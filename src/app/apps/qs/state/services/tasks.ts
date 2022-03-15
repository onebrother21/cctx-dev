import { Injectable } from '@angular/core';
import { AppService } from '@state';
import { Task } from '../models';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { tasks } from '../states';


@Injectable({providedIn:'root'})

export class TasksService {
  ext = "/tasks";
  constructor(private app:AppService){}
  fetch(){return of(tasks);}//this.get<Task[]>();}
  send(o:Task){return this.app.http.post<Task>(this.ext,o);}
}
