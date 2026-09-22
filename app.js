const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Serve the existing Smart City website from the public folder
app.use(express.static(path.join(__dirname, "public")));

// Home Route - This fixes the "Cannot GET /" issue
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// JSON Data Route for Transport
app.get("/api/transport", function (req, res) {
    const transports = [
        {
            name: "City Bus",
            route: "Route 101",
            start: "Central Bus Station",
            destination: "Railway Station",
            fare: 20,
            available: true
        },
        {
            name: "Metro",
            route: "Blue Line",
            start: "City Centre",
            destination: "Airport",
            fare: 40,
            available: true
        },
        {
            name: "Electric Bus",
            route: "MO-U",
            start: "Municipal Office",
            destination: "University",
            fare: 25,
            available: false
        },
        {
            name: "City Shuttle",
            route: "RMPT-AKPT",
            start: "Railway Station",
            destination: "Bus Terminal",
            fare: 15,
            available: true
        }
    ];
    res.json(transports);
});

// Start Server
app.listen(PORT, function () {
    console.log(`Smart City Portal running at http://localhost:${PORT}`);
});