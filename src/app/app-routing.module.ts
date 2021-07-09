import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from "./about/about.component"
import {ClientsComponent} from './clients/clients.component';
import {ServicesComponent} from "./services/services.component";
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from "./products/products.component";
import {CareersComponent} from "./careers/careers.component";
import {CertsComponent} from "./certs/certs.component";

const routes: Routes = [
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'aiml',
    component: ServicesComponent,
    data: {service: 'aiml'},
  },
  {
    path: 'cloud',
    component: ServicesComponent,
    data: {service: 'cloud'}
  },
  {
    path: 'cybersecurity',
    component: ServicesComponent,
    data: {service: 'cybersecurity'}
  },
  {
    path: 'blockchain',
    component: ServicesComponent,
    data: {service: 'blockchain'}
  },
  {
    path: 'devsecops',
    component: ServicesComponent,
    data: {service: 'devsecops'}

  },
  {
    path: 'bi',
    component: ServicesComponent,
    data: {service: 'bi'}

  },
  {
    path: 'staffing',
    component: ServicesComponent,
    data: {service: 'staffing'}

  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {service: 'services'}

  },
  {
    path: 'products',
    component: ProductsComponent,
    data: {product: 'search'}

  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'certs',
    component: CertsComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {service: 'home'}

  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })]
})
export class AppRoutingModule {
}
