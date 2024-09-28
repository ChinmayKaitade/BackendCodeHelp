// Server Instantiate
const express = require("express");
const app = express();

const bodyParser = require("body-parser"); // Used to parse req.body in express used in POST and PUT
app.use(bodyParser.json()); // for parsing JSON data (Specifically parse JSON data & add it to the req.body)

// Activate the server on 3000 port
app.listen(3000, (req, res) => {
  console.log("Server is running at port 3000");
});

// Routes
app.get("/", (req, res) => {
  console.log("Home Page is Here");
  res.send("Hello Ji !!!");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car Submitted Successfully");
});

// Connection to MongoDB and NodeJS
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/myDatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Error Received!!");
  });
