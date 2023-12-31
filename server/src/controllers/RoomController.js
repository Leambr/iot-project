const roomService = require('../services/RoomService');
const responseFormatter = require('../utils/responseFormatter');

const roomController = {
    getAllRooms: async (_, res) => {
        try {
            const rooms = await roomService.getAllRooms();
            const response = responseFormatter.formatResponse(res.statusCode, rooms);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getRoomById: async (req, res) => {
        try {
            const room = await roomService.getRoomById(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, room);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getRoomById: async (req, res) => {
        try {
            const room = await roomService.getRoomById(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, room);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getSensorsDataByRoomById: async (req, res) => {
        try {
            const room = await roomService.getSensorsDataByRoomById(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, room);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getMqttSensorsDataByRoomById: async (req, res) => {
        try {
            const room = await roomService.getMqttSensorsDataByRoomById(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, room);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = roomController;
