import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable,catchError,throwError,of } from 'rxjs';
import { delay,mergeMap,materialize,dematerialize } from 'rxjs/operators';
import { CreasyBackendRouter } from './apis/creasy';

@Injectable()
export class MockBackendProvider implements HttpInterceptor {
  constructor(private main:CreasyBackendRouter){}
  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    return of(req)
    .pipe(mergeMap(this.main.route))
    .pipe(materialize(),delay(300),dematerialize())
    .pipe(catchError(error => {
      //console.warn('the interceptor has caught an error, process it here',error);
      return throwError(() => error);
    }));
  }
}