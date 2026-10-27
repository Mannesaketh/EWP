# EWP

Essentials of Web Programming, including the Tourism Spa India project.

## Tourism Spa India

An English-language Indian wellness tourism portal with a separate Angular frontend and Express API.

## Repository projects

- `tourism spa/` - Tourism Spa Angular frontend and Express backend
- `EWP Twelve/` - EWP Twelve project

## Project layout

- `tourism spa/visit-spa-angular/` - Angular 18 frontend
- `tourism spa/visit-spa-server/` - Express backend API

Install dependencies separately in each application directory. Generated output, caches, and dependencies are excluded from Git by the root `.gitignore`.

## Start the Express API (`http://localhost:3000`)
Open a terminal inside `tourism spa/visit-spa-server/`:
```bash
cd "tourism spa/visit-spa-server"
npm install
npm start
```
- **Packages API:** `http://localhost:3000/api/packages`
- Express is API-only. It does not serve the Angular UI.

## Start the Angular frontend (`http://localhost:4200`)
Open a second terminal inside `tourism spa/visit-spa-angular/`:
```bash
cd "tourism spa/visit-spa-angular"
npm install
npm start
```
- Open `http://localhost:4200` in your browser.
- Open **India Packages** to load live JSON data from the Express API.
