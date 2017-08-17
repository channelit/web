import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterState} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdMenuModule, MdToolbarModule, MdIconModule, MdButtonModule, MdCardModule, MdChipsModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BannerComponent } from './home/banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { ServiceCardDirective } from './services/service-card.directive';
import { HtmlTagPipe } from './pipes/html-tag.pipe';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './services/service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ServicesComponent,
    ClientsComponent,
    HomeComponent,
    ServiceCardDirective,
    HtmlTagPipe,
    AboutComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
    MdChipsModule,
    MdButtonModule,
    MdCardModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
