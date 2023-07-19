const sensorService = require('../services/SensorService');
const responseFormatter = require('../utils/responseFormatter');

const sensorController = {
    getSensorsByRoomId: async (req, res) => {
        try {
            const sensor = await sensorService.getSensorsByRoomId(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, sensor);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // insertSensor: async (req, res) => {

    //     try {

    //     }
    // }
};

module.exports = sensorController;
