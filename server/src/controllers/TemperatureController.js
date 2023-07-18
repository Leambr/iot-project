const temperatureSensorService = require("../services/TemperatureService");
const responseFormatter = require("../utils/responseFormatter");

const temperatureController = {

    getAllTemperature: async (_, res) => {

        try {
            const temperature = await temperatureSensorService.getAllTemperature();
            const response = responseFormatter.formatResponse(res.statusCode, temperature);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getTemperatureById: async (req, res) => {
        try {
            const temperature = await temperatureSensorService.getTemperatureById(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, temperature);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getTemperatureBySensorId: async (req, res) => {
        try {
            const temperature = await temperatureSensorService.getTemperatureBySensorId(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, temperature);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = temperatureController;