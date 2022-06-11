import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockBackendProvider } from './api.service';

@NgModule({
  providers:[{
    provide:HTTP_INTERCEPTORS,
    useClass:MockBackendProvider,
    multi:true,
  }]
})
export class MockBackendModule { }