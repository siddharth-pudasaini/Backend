// server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Import Routes and Database Connection
const userRoutes = require("./routes/userRoute");
const connectToDatabase = require("./db"); // Import DB connection function

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Enable CORS for all requests
app.use(cors());

// Routes middleware
app.use("/api", userRoutes);

// Connect to MongoDB Atlas
connectToDatabase();

// Define a test route
app.get("/", (req, res) => {
  res.send("Mongoose is connected to MongoDB Atlas!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
