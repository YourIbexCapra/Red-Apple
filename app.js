const express = require("express");

// Setup dotenv config.
require("dotenv").config();

// App.
const app = express();

// CONSTANTS
const PORT = parseInt(process.env.PORT, 10) || 80;

// Listen.
app.listen(PORT, () => {
  console.log(`Live on: http://localhost:${PORT}/`);
});

// Routes.
app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});
