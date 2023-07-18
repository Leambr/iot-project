const express = require("express");
const lightSensorController = require("../controllers/LightController");
const jwtHelper = require("../utils/helper/jwtHelper");

const router = new express.Router();

router.get('/light', lightSensorController.getAllLights)
router.get('/lightById/:id', lightSensorController.getLightById)
router.get('/lightBySensorId/:id', lightSensorController.getLightBySensorId)
module.exports = router;
