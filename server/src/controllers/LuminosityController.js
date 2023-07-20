const luminosityService = require('../services/LuminosityService');
const responseFormatter = require('../utils/responseFormatter');

const luminosityController = {
    getAllLuminosity: async (_, res) => {
        try {
            const luminositys = await luminosityService.getAllLuminosity();
            const response = responseFormatter.formatResponse(res.statusCode, luminositys);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getLuminosityById: async (req, res) => {
        try {
            const luminosity = await luminosityService.getLuminosityById(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, luminosity);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getLuminosityBySensorId: async (req, res) => {
        try {
            const luminosity = await luminosityService.getLuminosityBySensorId(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, light);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = luminosityController;
