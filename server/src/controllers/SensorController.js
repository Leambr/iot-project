const sensorService = require("../services/SensorService");
const responseFormatter = require("../utils/responseFormatter");

const sensorController = {

    getAllSensors: async (_, res) => {

        try {
            const sensors = await sensorService.getAllSensors();
            const response = responseFormatter.formatResponse(res.statusCode, sensors);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getSensorById: async (req, res) => {
        try {
            const sensor = await sensorService.getSensorById(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, sensor);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getSensorsByRoomId : async (req, res) => {
        try {
            const sensors = await sensorService.getSensorsByRoomId(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, sensors);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = sensorController;