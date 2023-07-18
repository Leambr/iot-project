const movingSensorService = require('../services/MovingService');
const responseFormatter = require('../utils/responseFormatter');

const movingController = {
    getAllMoving: async (_, res) => {
        try {
            const move = await movingSensorService.getAllMoving();
            const response = responseFormatter.formatResponse(res.statusCode, move);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getMovingById: async (req, res) => {
        try {
            const move = await movingSensorService.getMovingById(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, move);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getMovingBySensorId: async (req, res) => {
        try {
            const move = await movingSensorService.getMovingBySensorId(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, move);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = movingController;
