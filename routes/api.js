const router = require('express').Router();
const foodController = require('../controllers/foodController')
const mealControoler = require('../controllers/mealController');
const userController = require('../controllers/userController');

router.post('/api/v1/addfood',foodController.addFood);

router.post('/api/v1/addmeal',mealControoler.addMeal);
router.patch('/api/v1/updatemeal/:_id',mealControoler.updateMeal);

router.post('/api/v1/adduser',userController.addUser);

router.get('/api/v1/createMealPlan/:calories',mealControoler.createMealPlan);



module.exports = router;