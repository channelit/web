import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdMenuModule, MdGridListModule, MdToolbarModule, MdIconModule, MdButtonModule, MdCardModule} from '@angular/material';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdIconModule,
    MdMenuModule,
    MdGridListModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
