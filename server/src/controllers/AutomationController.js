const automationService = require("../services/AutomationService");
const responseFormatter = require("../utils/responseFormatter");

const AutomationController = {

    getAllAutomation: async (_, res) => {

        try {
            const automation = await automationService.getAllAutomation();
            const response = responseFormatter.formatResponse(res.statusCode, automation);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAutomationById: async (req, res) => {
        try {
            const automation = await automationService.getAutomationById(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, automation);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getAutomationBySensorId: async (req, res) => {
        try {
            const automation = await automationService.getAutomationBySensorId(req.params.id);
            const response = responseFormatter.formatResponse(res.statusCode, automation);
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = AutomationController;