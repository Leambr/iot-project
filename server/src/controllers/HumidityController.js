const humiditySensorService = require("../services/HumidityService");
const responseFormatter = require("../utils/responseFormatter");

const humidityController = {

    getAllHumidity: async (_, res) => {

        try {
            const humidity = await humiditySensorService.getAllHumidity();
            const response = responseFormatter.formatResponse(res.statusCode, humidity);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getHumidityById: async (req, res) => {
        try {
            const humidity = await humiditySensorService.getHumidityById(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, humidity);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getHumidityBySensorId: async (req, res) => {
        try {
            const humidity = await humiditySensorService.getHumidityBySensorId(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, humidity);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = humidityController;