import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInjectComponent } from './http-inject/http-inject.component';
import { HttpComponent } from './http/http.component';
import { RouteComponent } from './route/route.component';
import { RouteInjectComponent } from './route-inject/route-inject.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpInjectComponent,
    HttpComponent,
    RouteComponent,
    RouteInjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
