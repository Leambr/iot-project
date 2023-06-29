const sensorService = require("../services/SensorService");
const responseFormatter = require("../utils/responseFormatter");
const jwtHelper = require("../utils/helper/jwtHelper");

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
};

module.exports = sensorController;
