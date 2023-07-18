const express = require('express');
const movingSensorController = require('../controllers/MovingController');

const router = new express.Router();

router.get('/moving', movingSensorController.getAllMoving);
router.get('/movingById/:id', movingSensorController.getMovingById);
router.get('/movingBySensorId/:id', movingSensorController.getMovingBySensorId);
module.exports = router;
