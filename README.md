# Tourism Spa India

An English-language Indian wellness tourism portal with a separate Angular frontend and Express API.

## Project layout

- `visit-spa-angular/` - Angular 18 frontend
- `visit-spa-server/` - Express backend API

Install dependencies separately in each application directory. Generated output, caches, and dependencies are excluded from Git by the root `.gitignore`.

## Start the Express API (`http://localhost:3000`)
Open a terminal inside `visit-spa-server/`:
```bash
cd visit-spa-server
npm install
npm start
```
- **Packages API:** `http://localhost:3000/api/packages`
- Express is API-only. It does not serve the Angular UI.

## Start the Angular frontend (`http://localhost:4200`)
Open a second terminal inside `visit-spa-angular/`:
```bash
cd visit-spa-angular
npm install
npm start
```
- Open `http://localhost:4200` in your browser.
- Open **India Packages** to load live JSON data from the Express API.
