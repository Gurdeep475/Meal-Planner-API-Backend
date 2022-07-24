const router = require('express').Router();
const foodController = require('../controllers/foodController')
const mealControoler = require('../controllers/mealController');
const userController = require('../controllers/userController');

router.post('/api/v1/addfood',foodController.addFood);      // adding new Food Item

router.post('/api/v1/addmeal',mealControoler.addMeal);      // adding new Meal
router.patch('/api/v1/updatemeal/:_id',mealControoler.updateMeal);  // updating existing meal using meal id

router.post('/api/v1/adduser',userController.addUser);      // adding new User






module.exports = router;