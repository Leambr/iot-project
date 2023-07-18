const lightSensorService = require("../services/LightService");
const responseFormatter = require("../utils/responseFormatter");

const lightController = {

    getAllLights: async (_, res) => {

        try {
            const lights = await lightSensorService.getAllLight();
            const response = responseFormatter.formatResponse(res.statusCode, lights);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getLightById: async (req, res) => {
        try {
            const light = await lightSensorService.getLightById(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, light);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getLightBySensorId: async (req, res) => {
        try {
            const light = await lightSensorService.getLightBySensorId(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, light);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = lightController;