import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({ selector: 'app-root', standalone: true, imports: [RouterLink, RouterLinkActive, RouterOutlet], template: `
<header class="site-header"><div class="brand"><img src="assets/ramayampet.jpg" alt="Ramayampet city emblem"><div><p class="eyebrow">MANA MUNICIPAL CORPORATION</p><h1>RAMAYAMPET</h1><p class="tagline">Clean City · Smart Living · Better Future</p></div></div></header>
<nav class="main-nav" aria-label="Main navigation"><a routerLink="/home" routerLinkActive="active">Home</a><a routerLink="/about" routerLinkActive="active">About City</a><a routerLink="/services" routerLinkActive="active">City Services</a><a routerLink="/emergency" routerLinkActive="active">Emergency</a><a routerLink="/transport" routerLinkActive="active">Public Transport</a></nav>
<main class="page-container"><router-outlet></router-outlet></main><footer class="site-footer"><p>© 2026 Municipal Corporation, Ramayampet · Smart City Information Portal</p></footer>` })
export class AppComponent {}
