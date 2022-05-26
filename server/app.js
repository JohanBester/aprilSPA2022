// 'Import' the Express module instead of http
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const pizzas = require("./routers/pizzas");

// Initialize the Express application
const app = express();

dotenv.config();

const PORT = process.env.API_PORT || 4040; // we use || to provide a default value

mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// =============================
// ==== ADD MIDDLEWARE HERE ====
// =============================

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

// Tell the App to use the different middleware
app.use(express.json());
app.use(logging);

// ==============================
// === ADD ALL THE ROUTS HERE ===
// ==============================

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.status(418).json({ message: "Service healthy" });
});

app.post("/echo", (request, response) => {
  response.json({ "request.body": request.body });
});

app.use("/pizzas", pizzas);

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
