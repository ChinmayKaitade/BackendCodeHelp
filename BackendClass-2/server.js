// Server Instantiate
const express = require("express");
const app = express();

// Load config from .env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Import routes for Todo API
const todoRoutes = require("./routes/todos");
// Mount the Todo APIs route
app.use("/api/v1", todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

// Connection to the Database
const dbConnect = require("./config/database");
dbConnect();

// Default route
app.get("", (req, res) => {
  res.send("<h1>This is a Homepage</h1>");
});
