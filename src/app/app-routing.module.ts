import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BannerComponent } from './home/banner/banner.component';
import { ServicesComponent } from './services/services.component';
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
