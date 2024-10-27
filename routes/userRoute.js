const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth"); // Protect the routes

// Protected route to create a new user at /create
router.post("/create", authMiddleware, userController.createUser);

// Protected route to get a user by email
router.get("/:email", authMiddleware, userController.getUserByEmail);

// Protected route to update a user by email
router.put("/:email", authMiddleware, userController.updateUserByEmail);

// Protected route to delete a user by email
router.delete("/:email", authMiddleware, userController.deleteUserByEmail);

module.exports = router;
