import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'emergency', component: EmergencyComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'contact', component: ContactComponent }
];
