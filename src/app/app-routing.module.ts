import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent} from "./services/analytics/analytics.component"
import { AboutComponent } from "./about/about.component"
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './services/search/search.component';
import { SoftwareComponent } from './services/software/software.component';
import { StaffComponent } from './services/staff/staff.component';
import { CloudComponent } from './services/cloud/cloud.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  },
  {
    path: 'software',
    component: SoftwareComponent
  },
  {
    path: 'cloud',
    component: CloudComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    component: HomeComponent
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
