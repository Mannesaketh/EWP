const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const angularOrigin = process.env.ANGULAR_ORIGIN || "http://localhost:4200";
app.use(cors({ origin: angularOrigin }));
app.use(express.json());
// Retain Week 11 website files for reference and direct access.
app.use(express.static(path.join(__dirname, "public")));
const transports = [
  { name: "City Bus", route: "Route 101", start: "Central Bus Station", destination: "Railway Station", fare: 20, available: true },
  { name: "Metro", route: "Blue Line", start: "City Centre", destination: "Airport", fare: 40, available: true },
  { name: "Electric Bus", route: "MO-U", start: "Municipal Office", destination: "University", fare: 25, available: false },
  { name: "City Shuttle", route: "RMPT-AKPT", start: "Railway Station", destination: "Bus Terminal", fare: 15, available: true }
];
app.get("/api/transport", (_req, res) => res.json(transports));
app.get("/api/health", (_req, res) => res.json({ status: "ok", service: "Smart City API" }));
app.get("/", (_req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.listen(PORT, () => console.log(`Smart City Server running at http://localhost:${PORT}`));
