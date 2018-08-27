import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterState} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatChipsModule, MatListModule, MatGridListModule} from '@angular/material';
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
import { IdMakerPipe } from './pipes/id-maker.pipe';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';

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
    ServiceComponent,
    IdMakerPipe,
    FooterComponent,
    FilterPipe,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatChipsModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
