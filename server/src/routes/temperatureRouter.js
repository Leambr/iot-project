const express = require("express");
const temperatureSensorController = require("../controllers/TemperatureController");
const jwtHelper = require("../utils/helper/jwtHelper");

const router = new express.Router();

console.log('router');
router.get('/temperature', temperatureSensorController.getAllTemperature)
router.get('/temperatureById/:id', temperatureSensorController.getTemperatureById)
router.get('/temperatureBySensorId/:id', temperatureSensorController.getTemperatureBySensorId)
module.exports = router;
