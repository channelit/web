/**
 * Created by hp on 2/27/17.
 */

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const AppRoutes: Routes = [
  { path: '',
    component: AppComponent,
    data: {
      title: 'Director Relations!'
    }
  },
  { path: 'about', component: AppComponent },
  { path: 'services', component: AppComponent },
  { path: 'customers', component: AppComponent },
  { path: 'contact', component: AppComponent }
];
