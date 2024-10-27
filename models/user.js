const mongoose = require("mongoose");

// Helper function to generate a random value between 1000 and 100000
const getRandomValue = () =>
  Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;

const incomeSchema = new mongoose.Schema({
  year: { type: String, required: true },
  month: { type: String, required: true },
  incomeName: { type: String, required: true },
  amount: { type: Number, required: true },
});

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    incomes: { type: [incomeSchema], default: [] },
    Four03: { type: Number, default: getRandomValue },
    TRS: { type: Number, default: getRandomValue },
    IRA: { type: Number, default: getRandomValue },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
