const express = require('express');
const luminositySensorController = require('../controllers/LuminosityController');
const jwtHelper = require('../utils/helper/jwtHelper');

const router = new express.Router();

router.get('/luminosity', luminositySensorController.getAllLuminosity);
router.get('/luminosityById/:id', luminositySensorController.getLuminosityById);
router.get('/luminosityBySensorId/:id', luminositySensorController.getLuminosityBySensorId);
module.exports = router;
