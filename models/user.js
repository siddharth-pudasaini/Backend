const mongoose = require("mongoose");

const getRandomValue = () => Math.floor(Math.random() * 50000) + 10000;

// Define the Investment schema
const investmentSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  month: { type: String, required: true },
  incomeName: { type: String, required: true },
  amount: { type: Number, required: true },
});

// Define the Expense schema
const expenseSchema = new mongoose.Schema({
  expenseType: { type: String, required: true }, // Type of the expense (e.g., Rent, Utilities)
  amount: { type: Number, required: true }, // Amount for the expense
});

// Define the User schema with investments and structured expenses
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    Four03: { type: Number, default: getRandomValue },
    TRS: { type: Number, default: getRandomValue },
    IRA: { type: Number, default: getRandomValue },
    monthlyTarget: { type: Number, default: 0 },
    montlhyIncome: { type: Number, default: 0 },
    // Array of expenses with the structure {"expenseType": "amount"}
    monthlyExpenses: { type: [expenseSchema], default: [] },
    goal: { type: Number, default: 0 },
    // Array of investments using the investmentSchema
    investments: { type: [investmentSchema], default: [] },
  },
  { timestamps: true }
);

// Define and export the User model
const User = mongoose.model("User", userSchema);
module.exports = User;
