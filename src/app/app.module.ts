import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, RouterState} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BannerComponent} from './home/banner/banner.component';
import {ServicesComponent} from './services/services.component';
import {ClientsComponent} from './clients/clients.component';
import {HomeComponent} from './home/home.component';
import {ServiceCardDirective} from './services/service-card.directive';
import {HtmlTagPipe} from './pipes/html-tag.pipe';
import {AboutComponent} from './about/about.component';
import {ServiceComponent} from './services/service/service.component';
import {IdMakerPipe} from './pipes/id-maker.pipe';
import {FooterComponent} from './footer/footer.component';
import {FilterPipe} from './pipes/filter.pipe';
import {ProductsComponent} from './products/products.component';
import {ProductComponent} from './products/product/product.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {CareersComponent} from './careers/careers.component';
import { CertsComponent } from './certs/certs.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    ProductComponent,
    CareersComponent,
    CertsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatToolbarModule,
    MatChipsModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    AppRoutingModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
