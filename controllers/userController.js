const User = require("../models/user"); // Assuming user.js is in the models directory

// Create a new user
const createUser = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to get retirement funds (Four03, TRS, IRA) by user email
const getRetirementFunds = async (req, res) => {
  try {
    const user = await User.findOne(
      { email: req.params.email },
      { Four03: 1, TRS: 1, IRA: 1, _id: 0 }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Controller to get investments by user email
const getInvestments = async (req, res) => {
  try {
    const user = await User.findOne(
      { email: req.params.email },
      { investments: 1, _id: 0 }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user.investments);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
module.exports = {
  createUser,
  getRetirementFunds,
  getInvestments,
};
