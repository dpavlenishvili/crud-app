import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "./app-routing.module";
import {BASE_URL} from "./token";
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: BASE_URL, useValue: environment.apiBaseUrl},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
