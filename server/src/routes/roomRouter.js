const express = require('express');
const roomController = require('../controllers/RoomController');
const jwtHelper = require('../utils/helper/jwtHelper');

const router = new express.Router();

router.get('/rooms', roomController.getAllRooms);
router.get('/room/:id', roomController.getRoomById);
router.get('/sensorsDataByRoomId/:id', roomController.getSensorsDataByRoomById);
module.exports = router;
