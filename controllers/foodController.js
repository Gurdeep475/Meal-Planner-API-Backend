const food = require("../models/food");

exports.addFood = async (req, res) => {
  try {
    const result = await food.create(req.body);
    res.status(200).json({
      message: "Food created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
