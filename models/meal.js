const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Meal = Schema({
  name: String,
  foodItems: [{ type: Schema.Types.ObjectId, ref: "food" }],
  catagory: {
    type: String,
    enum: ["Breakfast", "Lunch", "Evening Snack", "Dinner"],
  },
});

module.exports = mongoose.model("meal", Meal);
