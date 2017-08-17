import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component"
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent} from "./services/services.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'search',
    component: ServicesComponent,
    data: { service: 'search'}
  },
  {
    path: 'analytics',
    component: ServicesComponent,
    data: { service: 'analytics'}
  },
  {
    path: 'cloud',
    component: ServicesComponent,
    data: { service: 'cloud' }

  },
  {
    path: 'staffing',
    component: ServicesComponent,
    data: { service: 'staffing'}
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { service: 'home'}

  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
