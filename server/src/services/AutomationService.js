const GlobalService = require("./GlobalService");
const table = require("../utils/constants/tablesConstants");
const model = require("../utils/constants/modelsConstants");
const db = require("../config/databaseConfig");

const automationService = {

    getAllAutomation: async () => {
        try {

            const query = `SELECT * FROM ${table.automation}`;
            const result = await GlobalService.getAll(query, model.automationModel);
            return result;
        }
        catch (error) {

            throw error;
        }
    },

    getAutomationById: async (id) => {
        try {

            const query = `SELECT * FROM ${table.automation} WHERE id = ${id}`;
            const result = await GlobalService.getById(query, model.automationModel);
            return result;
        }
        catch (error) {

            throw error;
        }
    },

    getAutomationBySensorId: async (id) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `SELECT * FROM ${table.automation} WHERE sensor_id = '${id}'`;
                db.query(query, (error, result) => {
                    if (error || result.length === 0) {
                        reject(new Error("Capteur inexistante."));
                    } else {
                        resolve(result);
                    }
                });
            });
        } catch (error) {

            throw error;
        }
    },

};

module.exports = automationService;