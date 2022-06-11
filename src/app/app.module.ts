import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared';
import { AppStateModule } from './state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockBackendModule } from '@api';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '@env/environment.prod';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MockBackendModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    AppStateModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
