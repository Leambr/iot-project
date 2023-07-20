const express = require('express');
const sensorController = require('../controllers/SensorController');
const jwtHelper = require('../utils/helper/jwtHelper');

const router = new express.Router();

router.get('/sensorsByRoomsId/:id', sensorController.getSensorsByRoomId);

module.exports = router;
