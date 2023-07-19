const express = require('express');
const sensorController = require('../controllers/SensorController');
const jwtHelper = require('../utils/helper/jwtHelper');

const router = new express.Router();

router.get('/getAllSensorsByRoomId/:id', sensorController.getSensorsByRoomId);
// router.post('/insertSensor/:sensorId', sensorController.insertSensor)

module.exports = router;
