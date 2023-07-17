const co2SensorService = require("../services/Co2Service");
const responseFormatter = require("../utils/responseFormatter");

const co2Controller = {

    getAllCo2: async (_, res) => {

        try {
            const co2 = await co2SensorService.getAllCo2();
            const response = responseFormatter.formatResponse(res.statusCode, co2);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getCo2ById: async (req, res) => {
        try {
            const co2 = await co2SensorService.getCo2ById(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, co2);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getCo2BySensorId : async (req, res) => {
        try {
            const co2 = await co2SensorService.getCo2BySensorId(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, co2);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = co2Controller;