const meal = require("../models/meal");
const user = require("../models/user");

exports.addUser = async (req, res) => {
  try {
    const includedMealPlanList = req.body.mealPlan;
    const fetchedMealList = await meal.find().select("_id name");

    includedMealPlanList.forEach((includedMealPlan, index) => {
      let mealRefArray = [];
      includedMealPlan.meal.forEach((meal) => {
        fetchedMealList.forEach((fetchedMeal) => {
          if (fetchedMeal.name == meal) {
            mealRefArray.push(fetchedMeal._id);
          }
        });
      });
      includedMealPlanList[index].meal = mealRefArray;
      includedMealPlanList[index].date = new Date(includedMealPlan.date);
    });

    req.body.mealPlan = includedMealPlanList;
    console.log(req.body.mealPlan);
    const result = await user.create(req.body);
    res.status(200).json({
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
