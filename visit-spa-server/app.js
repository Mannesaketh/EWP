const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// a) Allow the Angular app on either local hostname.
app.use(cors({
  origin: ['http://localhost:4200', 'http://127.0.0.1:4200']
}));

// India wellness and tourism packages consumed by the Angular application.
const packages = [
  {
    name: "Kerala Ayurveda & Backwaters",
    code: "IND-101",
    start: "Kochi International Airport",
    destination: "Kumarakom, Kerala",
    price: 48500,
    available: true
  },
  {
    name: "Rishikesh Yoga & Ganga Reset",
    code: "IND-202",
    start: "Dehradun Airport",
    destination: "Rishikesh, Uttarakhand",
    price: 36500,
    available: true
  },
  {
    name: "Goa Coastal Spa Escape",
    code: "IND-303",
    start: "Goa International Airport",
    destination: "South Goa beaches and wellness resorts",
    price: 42000,
    available: true
  },
  {
    name: "Kerala Panchakarma Retreat",
    code: "IND-404",
    start: "Trivandrum International Airport",
    destination: "Varkala and Kovalam, Kerala",
    price: 78000,
    available: true
  }
];

// Expose the API consumed by the separate Angular development server.
app.get('/api/packages', (req, res) => {
  res.json(packages);
});

app.listen(PORT, () => {
  console.log(`Visit Spa Backend running at http://localhost:${PORT}`);
  console.log(`REST API endpoint available at http://localhost:${PORT}/api/packages`);
});
