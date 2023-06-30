const express = require("express");
const co2SensorController = require("../controllers/Co2Controller");
const jwtHelper = require("../utils/helper/jwtHelper");

const router = new express.Router();


router.get('/co2', co2SensorController.getAllCo2)
router.get('/co2ById/:id', co2SensorController.getCo2ById)
router.get('/co2BySensorId/:id', co2SensorController.getCo2BySensorId)
module.exports = router;
