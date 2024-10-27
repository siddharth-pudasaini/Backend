const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth"); // Protect the routes

// Protected route to create a new user at /create
router.post("/create", authMiddleware, userController.createUser);

// Route to get retirement funds
router.get("/retirement/:email", userController.getRetirementFunds);

// Route to get investments
router.get("/investments/:email", userController.getInvestments);

module.exports = router;
