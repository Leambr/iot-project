const express = require("express");
const automationController = require("../controllers/AutomationController");
const jwtHelper = require("../utils/helper/jwtHelper");

const router = new express.Router();


router.get('/automation', automationController.getAllAutomation)
router.get('/automationById/:id', automationController.getAutomationById)
router.get('/automationBySensorId/:id', automationController.getAutomationBySensorId)
module.exports = router;
