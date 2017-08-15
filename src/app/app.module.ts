import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterState, RouterStateSnapshot} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdMenuModule, MdGridListModule, MdToolbarModule, MdIconModule, MdButtonModule, MdCardModule, MdChipsModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BannerComponent } from './home/banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './services/search/search.component';
import { SoftwareComponent } from './services/software/software.component';
import { StaffComponent } from './services/staff/staff.component';
import { CloudComponent } from './services/cloud/cloud.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ServicesComponent,
    ClientsComponent,
    SearchComponent,
    SoftwareComponent,
    StaffComponent,
    CloudComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdIconModule,
    MdMenuModule,
    MdGridListModule,
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
