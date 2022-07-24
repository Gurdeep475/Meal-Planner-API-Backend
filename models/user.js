const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const User = Schema({
    name: String,
    calorieRequirement: Number,
    mealPlan: [{_id: false, date: Date,meal: [{type: Schema.Types.ObjectId,ref:'meal'}]}]
})


module.exports = mongoose.model('user',User);