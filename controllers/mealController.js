const food = require("../models/food");
const meal = require("../models/meal");

const processMeal = async (includedFoodItems) => {
    const fetchedFoodList = await food.find({}).select("_id name");
    const foodrefArray = [];
    fetchedFoodList.forEach((fetchedFood) => {
      includedFoodItems.forEach((includedFood) => {
        if (fetchedFood.name == includedFood) {
          foodrefArray.push(fetchedFood._id);
        }
      });
    });
    return foodrefArray;
}
exports.addMeal = async (req, res) => {
  try {
    const includedFoodItems = req.body.foodItems;
    req.body.foodItems = await processMeal(includedFoodItems);
    
    const result = await meal.create(req.body);
    res.status(200).json({
      message: "Meal created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateMeal = async (req, res) => {
    try {

        const includedFoodItems = req.body.foodItems;
        req.body.foodItems = await processMeal(includedFoodItems);
        const result = await meal.findOneAndUpdate({_id: req.params._id}, req.body, {new: true});
        console.log(result);
        // const result = await meal.findOneAndUpdate({_id: req.params.id}, req.body);
        res.status(200).json({
            message: "Meal updated successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}

exports.createMealPlan = async (req, res) => {
    try {
        const result = await meal.find({}).select("_id name");
        res.status(200).json({
            message: "Meal plan created successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}