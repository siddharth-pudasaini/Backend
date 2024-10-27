// db.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env
dotenv.config();

const password = process.env.DB_PASSWORD;

// MongoDB connection string
const uri = `mongodb+srv://pudasainisid123:${password}@cluster1.np9dz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

// Function to connect to MongoDB Atlas
async function connectToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB using Mongoose!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process if connection fails
  }
}

module.exports = connectToDatabase;
