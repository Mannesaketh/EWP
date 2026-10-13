import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ServicesComponent } from './services.component';
import { EmergencyComponent } from './emergency.component';
import { TransportComponent } from './transport.component';
export const routes: Routes = [
 { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: 'home', component: HomeComponent },
 { path: 'about', component: AboutComponent },
 { path: 'services', component: ServicesComponent },
 { path: 'emergency', component: EmergencyComponent },
 { path: 'transport', component: TransportComponent },
 { path: '**', redirectTo: 'home' }
];
