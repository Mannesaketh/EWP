# EWP

Essentials of Web Programming, including the Tourism Spa India project.

## Tourism Spa

Tourism Spa is a wellness tourism portal built as two separate applications:

- `tourism spa/visit-spa-angular/` - Angular 18 single-page frontend
- `tourism spa/visit-spa-server/` - Express.js backend API

The Angular application displays the pages and user interface. The Express application exposes the tourism package data. Angular requests that data from `http://localhost:3000/api/packages`, and CORS allows the frontend running on port 4200 to communicate with it.

## Requirements

Install Node.js from [nodejs.org](https://nodejs.org/) before running the project. The Node.js installer includes npm.

Verify the installation in PowerShell, Command Prompt, or a terminal:

```bash
node --version
npm --version
```

Node.js 18 or newer is recommended for Angular 18 and Express.

## Run the complete project

Run the backend and frontend in two separate terminals. Start the backend first so the package request works when the Angular page opens.

### Terminal 1: Express backend

```bash
cd "tourism spa/visit-spa-server"
npm install
npm start
```

The backend runs at `http://localhost:3000` and provides:

```text
http://localhost:3000/api/packages
```

To test the API in PowerShell:

```powershell
Invoke-WebRequest http://localhost:3000/api/packages
```

### Terminal 2: Angular frontend

```bash
cd "tourism spa/visit-spa-angular"
npm install
npm start
```

The frontend runs at:

```text
http://localhost:4200
```

Open the **India Packages** page to see package data loaded from Express.

If the Angular CLI needs to be started directly, use:

```bash
npx ng serve --host 127.0.0.1 --port 4200
```

## Build the frontend

```bash
cd "tourism spa/visit-spa-angular"
npm run build
```

The production files are generated in `dist/`. This folder is ignored by Git because it can be recreated from the source code.

## Stop the project

Press `Ctrl+C` in each terminal running a server. The frontend and backend are independent processes and must be stopped separately.

## Repository projects

- `tourism spa/` - Tourism Spa Angular frontend and Express backend
- `EWP Twelve/` - EWP Twelve project

Dependencies (`node_modules`), Angular caches, build output, logs, and local environment files are excluded through the root `.gitignore`.
