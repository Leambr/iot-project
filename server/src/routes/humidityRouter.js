const express = require("express");
const humiditySensorController = require("../controllers/HumidityController");
const jwtHelper = require("../utils/helper/jwtHelper");

const router = new express.Router();

console.log('router');
router.get('/humidity', humiditySensorController.getAllHumidity)
router.get('/humidityById/:id', humiditySensorController.getHumidityById)
router.get('/humidityBySensorId/:id', humiditySensorController.getHumidityBySensorId)
module.exports = router;
