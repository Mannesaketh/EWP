# Smart City Information Portal — Week 12

This project upgrades the Week 11 Ramayampet Smart City portal to an Angular single-page application, while retaining the original HTML/CSS/media and Express backend.

## Requirements
- Node.js 20.19+ or 22.12+ (recommended) and npm
- Internet access for the first `npm install`

## 1. Start the Week 11 / Week 12 Express backend
Open a terminal in `smart-city-server` and run:

```bash
npm install
npm start
```

API checks: `http://localhost:3000/api/health` and `http://localhost:3000/api/transport`.

## 2. Start the Angular frontend
Open a second terminal in `smart-city-angular` and run:

```bash
npm install
npm start
```

Open `http://localhost:4200`. Navigate through Home, About City, City Services, Emergency and Public Transport. Transport loads from Express automatically and can be refreshed with the button.

## Folder layout
- `smart-city-server/` — Week 11 Express server and original `public/` website files/media
- `smart-city-angular/` — Week 12 Angular + TypeScript SPA

## Week 12 concepts covered
Standalone Angular components, TypeScript interface, interpolation, event binding, structural directive (`*ngIf`, `*ngFor`), Angular Router, dependency injection, service layer, `HttpClient`, JSON API, CORS and error/loading messages.

## Notes
- The original Week 11 HTML pages and assets are retained in `smart-city-server/public/`; the Angular app reuses the city images and carries forward the core content.
- The complaint form is a frontend demonstration only; it does not submit/store personal information.
- The emergency page lists India's 112 emergency number and deliberately avoids inventing unverified local contacts.
- The ZIP excludes `node_modules`; run `npm install` in each folder to install dependencies.
