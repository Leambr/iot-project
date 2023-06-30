const express = require("express");
const sensorController = require("../controllers/SensorController");
const jwtHelper = require("../utils/helper/jwtHelper");

const router = new express.Router();


router.get('/sensors', sensorController.getAllSensors)
router.get('/sensors/:id', sensorController.getSensorById)
router.get('/sensorsByRoom/:id', sensorController.getSensorsByRoomId)
module.exports = router;
