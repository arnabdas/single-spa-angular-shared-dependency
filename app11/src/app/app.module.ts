import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AssetUrlPipe } from '../single-spa/asset-url-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { Slider11Component } from './slider11/slider11.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetUrlPipe,
    EmptyRouteComponent,
    HelloComponent,
    HomeComponent,
    Slider11Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
