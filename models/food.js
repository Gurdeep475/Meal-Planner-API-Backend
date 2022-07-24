const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Food = Schema({
  name: String,
  calories: Number,
  protein: Number,
  carb: Number,
  fat: Number,
  acceptedUnits: {
    type: [String],
    enum: ["ml", "liter", "kg", "g", "item"],
  },
  itemWeight: Number,
});

module.exports = mongoose.model("food", Food);
